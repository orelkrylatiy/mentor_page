# VPS deployment

This is a Next.js server-rendered landing page. GitHub Actions builds the application and installs production dependencies on the runner. The VPS receives a ready-to-run artifact and does not build the project.

## One-time VPS setup

After installing Deploy Manager:

```bash
sudo install -o root -g deploy -m 0640 deploy/deploy-manager.toml /etc/deploy-manager/projects/mentor-page.toml
sudo -u deploy deploy-manager init mentor-page
command -v systemctl
sudo install -m 0644 deploy/mentor-page.service /etc/systemd/system/mentor-page.service
sudo install -m 0440 deploy/mentor-page.sudoers /etc/sudoers.d/deploy-mentor-page
sudo visudo -cf /etc/sudoers.d/deploy-mentor-page
sudo systemctl daemon-reload
sudo systemctl enable mentor-page.service
```

The first successful deployment starts the service. It listens only on `127.0.0.1:3002`. Configure an Nginx virtual host for the final domain to proxy to that port. The production domain is not inferred in this repository.

## GitHub setup

Add repository variable `ENABLE_VPS_DEPLOY=true` after the service unit, project config and Nginx virtual host are ready. The workflow defaults to host `15.235.247.12` and user `deploy`; override `DEPLOY_HOST` / `DEPLOY_USER` if needed.

Add secrets:
- `DEPLOY_SSH_KEY`: dedicated private key for the deploy account.
- `DEPLOY_KNOWN_HOSTS`: independently verified SSH host-key entry for the VPS.

The deployment workflow is guarded and will not connect to the VPS until `ENABLE_VPS_DEPLOY=true`.
