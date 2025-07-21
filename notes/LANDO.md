# LANDO

## 🔥 Full Lando Destruction Workflow

### .25 Backup and Uninstall

```sh
# backup all the envs and db
pnpm backup
# clear wordpress cache
pnpm wp:cache
# uninstall full repository
pnpm run uninstall
```
---

```sh
# hopefully that will work, else destroy
pnpm lando:rebuild
```

### 1. Stop and Destroy Lando App

```sh
lando poweroff
lando destroy -y
```

### 2. Delete Lando Metadata

```sh
rm -rf .lando
rm -rf ~/.lando
```

### 3. Optionally Remove Docker Volumes and Containers

```sh
docker container prune -f
docker volume prune -f
```

### 4. (Optional) Clean Your `pnpm` Environment

```sh
pnpm store prune
```

### Optional: Run cleanup script

```sh
mac-cleanup
```

### Reinstall Lando

```sh
# Paste our convenience script into a terminal and execute
/bin/bash -c "$(curl -fsSL https://get.lando.dev/setup-lando.sh)"
```

### Certs for vite dev

```sh
mkdir -p certs
mkcert -key-file certs/local.key -cert-file certs/local.crt pyromancy2025.lndo.site localhost 127.0.0.1

#copy to theme folder
cp -R certs web/app/themes/pyromancy2025/

# fix permissions
chmod 600 certs/local.key
chmod 644 certs/local.crt

#confirm readable
cat certs/local.key | head -n 1
```
