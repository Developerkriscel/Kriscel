# Kriscel Deployment on Hostinger

This project runs as two Node apps:

- Frontend: Next.js app in `client`
- Backend: Express API in `server`

Recommended production topology:

- `https://www.yourdomain.com` -> Next.js frontend
- `https://api.yourdomain.com` -> Express backend

## 0) Start From Hostinger VPS Overview (Where You Are Now)

If your VPS is already created and shows `Running` in Hostinger Overview:

1. Click `Terminal` from the top-right of the VPS Overview page.
2. Run base setup:

```bash
apt update
apt upgrade -y
apt install -y curl git nginx ufw ca-certificates gnupg
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
npm install -g pm2
```

3. Verify runtime tools:

```bash
node -v
npm -v
pm2 -v
nginx -v
```

4. Open Hostinger `DNS Manager` and point both to your VPS IP:
	- `www` A record -> VPS public IP
	- `api` A record -> VPS public IP

If your domain was purchased in Hostinger and already connected to your account, you only need to create/update these DNS records in Hostinger DNS Zone (no external nameserver changes required).

Then continue with the next sections.

## 1) Prepare Local Repository

On VPS terminal, clone your repository and install dependencies:

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/Developerkriscel/Kriscel.git kriscel
cd /var/www/kriscel

cd client
npm install
npm run build

cd ../server
npm install
```

Optional local smoke test:

```bash
# terminal 1
cd server
npm run start

# terminal 2
cd client
npm run start
```

## 2) Create Hostinger Apps

Create two Node.js apps in Hostinger:

1. Frontend app from `client`
2. Backend app from `server`

If using a VPS instead of hPanel Node apps, use PM2 + Nginx (templates included in `deploy/`).

## 3) Backend Environment Variables

Set these in Hostinger backend app (see `server/.env.production.example`):

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=<your-atlas-uri>
CLIENT_URL=https://www.yourdomain.com
JWT_SECRET=<long-random-secret>
```

Start command:

```bash
npm run start
```

## 4) Frontend Environment Variables

Set these in Hostinger frontend app (see `client/.env.production.example`):

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_CLIENT_URL=https://www.yourdomain.com
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
PORT=3000
```

Build + start:

```bash
npm run build
npm run start
```

Important:

- `NEXT_PUBLIC_API_URL` must be set in production so frontend requests go to Hostinger API.
- If missing, app code may fallback to an old default backend URL.

## 5) DNS Setup

In Hostinger DNS zone:

- `A`/`CNAME` for `www` -> frontend target
- `A`/`CNAME` for `api` -> backend target

### Domain Bought In Hostinger (Recommended Path)

If your domain is already in the same Hostinger account as your VPS:

1. Go to `Domains` -> your domain -> `DNS / Nameservers` -> `DNS records`.
2. Ensure nameservers are Hostinger defaults:
	- `ns1.dns-parking.com`
	- `ns2.dns-parking.com`
3. Add or update records:
	- Type: `A`, Name: `@`, Points to: `<your-vps-ip>`, TTL: default
	- Type: `A`, Name: `www`, Points to: `<your-vps-ip>`, TTL: default
	- Type: `A`, Name: `api`, Points to: `<your-vps-ip>`, TTL: default
4. Remove conflicting old records for `@`, `www`, or `api` (if pointing elsewhere).
5. Wait for propagation (usually 5-30 minutes, can take up to 24 hours).

Optional redirect:

- Redirect `yourdomain.com` -> `https://www.yourdomain.com` from Hostinger domain redirect settings, or keep Nginx redirect enabled.

If root domain is preferred, redirect `yourdomain.com` to `www.yourdomain.com`.

## 6) TLS/SSL

Enable SSL certificates for both hostnames:

- `www.yourdomain.com`
- `api.yourdomain.com`

Use Hostinger SSL manager (or Let's Encrypt on VPS).

## 7) Verify Deployment

Check endpoints:

```bash
curl -I https://www.yourdomain.com
curl -I https://api.yourdomain.com/
```

Expected API root response body:

`Kriscel API is running...`

Functional checks:

1. Home page loads and internal navigation works.
2. Contact form submits successfully.
3. Admin login and protected routes work.
4. Browser shows no CORS failures for API calls.

## 8) If You Use VPS: PM2 + Nginx

Use:

- PM2 config: `deploy/ecosystem.config.cjs`
- Nginx template: `deploy/nginx.kriscel.conf`

Apply Nginx config and restart:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Start PM2:

```bash
pm2 start deploy/ecosystem.config.cjs
pm2 save
pm2 startup
```

## 9) Security Checklist (Do This Before Go-Live)

1. Rotate MongoDB password and URI.
2. Rotate `JWT_SECRET`.
3. Ensure `.env` files are not committed.
4. Restrict MongoDB Atlas IP access where possible.
5. Enable automatic backups for database.
