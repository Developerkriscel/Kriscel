# Kriscel Docker Deployment on Hostinger

This repository is now deployed using Docker containers for both frontend and backend.

The new Docker-based production topology is:

- `web` service -> Next.js frontend from `client`
- `api` service -> Express backend from `server`

## Files added for Docker deployment

- `docker-compose.yml`
- `client/Dockerfile`
- `server/Dockerfile`
- `client/.dockerignore`
- `server/.dockerignore`

## 1) Hostinger Docker Manager Deployment

If you are using Hostinger VPS Docker Manager, deploy this repository with the existing `docker-compose.yml`.

### Recommended Docker Compose setup

1. Open Hostinger VPS Docker Manager.
2. Create a new deployment and point it to this GitHub repository.
3. Use the included `docker-compose.yml` file from the repo.
4. Add the required environment variables in the Docker Manager UI.

### Required environment variables

For `api` service:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=<your-mongodb-atlas-uri>
CLIENT_URL=https://www.yourdomain.com
JWT_SECRET=<long-random-secret>
```

For `web` service:

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_CLIENT_URL=https://www.yourdomain.com
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
PORT=3000
```

> Note: The frontend expects `NEXT_PUBLIC_API_URL` to point to the production API host.

## 2) Local Docker Compose testing

If you want to test locally first, use:

```bash
docker compose up --build
```

Then open:

- `http://localhost:3000` for frontend
- `http://localhost:5000` for backend

## 3) Hostinger port mapping

Hostinger Docker Manager should expose the service ports:

- `3000` for `web`
- `5000` for `api`

If you want the app to be accessible on standard HTTP/HTTPS ports, use Hostinger Docker Manager routing or reverse proxy configuration to map `80/443` to your `web` container.

## 4) DNS setup

In Hostinger DNS zone:

- `A` record for `@` -> your VPS IP
- `A` record for `www` -> your VPS IP
- `A` record for `api` -> your VPS IP

After DNS propagation, `https://www.yourdomain.com` should route to the web service and `https://api.yourdomain.com` should route to the API service.

## 5) SSL/TLS

Use Hostinger SSL manager to enable certificates for:

- `www.yourdomain.com`
- `api.yourdomain.com`

If Docker Manager does not handle SSL, use a reverse proxy or Hostinger's managed SSL solution.

## 6) Verify the Docker deployment

Check:

```bash
curl -I https://www.yourdomain.com
curl -I https://api.yourdomain.com/
```

The frontend should load correctly, and the API should respond on the `/` endpoint.

## 7) Old manual PM2/Nginx instructions removed

The previous PM2 + Nginx manual deployment instructions are no longer the recommended path for this project. The repo now uses Docker for production deployment.

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
