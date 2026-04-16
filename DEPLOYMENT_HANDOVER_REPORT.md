# Kriscel Production Handover Report

Date: 2026-04-10  
Project: Kriscel (Web + API)  
Environment: Production  
Host: Hostinger VPS (Ubuntu 24.04.4 LTS)

## 1) Executive Summary
Kriscel has been deployed to production with HTTPS, reverse proxy, process management, reboot persistence, firewall hardening, and brute-force protection enabled. Web and API are both reachable and returning healthy responses.

## 2) Scope Delivered
- Domain and DNS mapping for root, www, and api subdomain.
- Nginx reverse proxy setup for frontend and backend services.
- TLS certificate issuance and installation using Certbot (Let's Encrypt).
- PM2 process orchestration for Node.js web and API services.
- PM2 startup persistence with systemd (`pm2-root.service`).
- UFW firewall baseline rules and Fail2ban installation.
- End-to-end validation: app reachability, auth API, and service continuity after reboot.

## 3) Production Topology
- `https://kriscel.com` and `https://www.kriscel.com` -> Nginx -> `127.0.0.1:3000` (Next.js via PM2).
- `https://api.kriscel.com` -> Nginx -> `127.0.0.1:5000` (Node API via PM2).
- Database: MongoDB Atlas (external managed service).

## 4) Certificates and HTTPS
Provider: Let's Encrypt (Certbot Nginx plugin)

Covered hostnames:
- `kriscel.com`
- `www.kriscel.com`
- `api.kriscel.com`

Status:
- Certificate successfully installed in Nginx site config.
- Auto-renewal task configured by Certbot.
- Renewal simulation (`certbot renew --dry-run`) succeeded.

## 5) Service and Security Status
Service manager:
- PM2 apps online: `kriscel-web`, `kriscel-api`.
- systemd service: `pm2-root.service` is enabled and active.

Network and protection:
- UFW active with inbound rules for `OpenSSH` and `Nginx Full` only.
- Fail2ban active with `sshd` jail.

Health checks passed:
- `curl -I https://www.kriscel.com` -> HTTP 200.
- `curl -I https://api.kriscel.com` -> HTTP 200.
- Auth endpoint returns token for valid admin login.

## 6) Credentials and Access Notes
- Temporary admin reset was used for recovery during deployment.
- Sensitive values (admin password, MongoDB URI, JWT secret) must be rotated immediately after handover.
- Do not store real secrets in repository files or chat logs.

## 7) Incident Notes During Deployment
- Commands occasionally failed with artifacts like `^[[200~` and trailing `~`.
- Root cause: terminal bracketed-paste control characters, not infrastructure faults.
- Resolution: re-run commands as clean/manual input.

## 8) Operations Runbook (Day-2)
Common checks:
- `pm2 status`
- `systemctl status pm2-root --no-pager`
- `systemctl status nginx --no-pager`
- `systemctl status fail2ban --no-pager`
- `ufw status verbose`

Logs:
- `pm2 logs kriscel-api --lines 100`
- `pm2 logs kriscel-web --lines 100`
- `journalctl -u nginx -n 100 --no-pager`

Restart sequence (after env changes):
- `pm2 restart kriscel-api --update-env`
- `pm2 restart kriscel-web --update-env`
- `pm2 save`

## 9) Post-Go-Live Mandatory Actions
1. Change admin password from temporary value.
2. Rotate MongoDB credentials and JWT secret.
3. Enforce SSH key-only login and disable root password login.
4. Keep periodic monitoring of PM2, Nginx, SSL renewal, and Fail2ban.

## 10) Handover Acceptance Criteria
Deployment is considered complete when all are true:
- Web and API return 200 over HTTPS.
- PM2 apps auto-restore after reboot.
- SSL renew dry-run succeeds.
- UFW and Fail2ban remain active.
- Secrets rotated and documented in secure vault.

---
Owner Note: This report is intended as client/team handover documentation for production operations and audit readiness.
