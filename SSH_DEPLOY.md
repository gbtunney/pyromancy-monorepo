# SSH/rsync Deployment Commands for Bluehost

## Quick Deploy Command:

```bash
rsync -avz --delete \
    --exclude='.git/' \
    --exclude='.history/' \
    --exclude='node_modules/' \
    --exclude='.env' \
    --exclude='*.log' \
    --exclude='.DS_Store' \
    --exclude='notes/' \
    --exclude='apps/prisma-api/' \
    --exclude='packages/' \
    --progress \
    ./ \
    gilliap8@pyr-staging.gilliantunney.com:/home3/gilliap8/pyr-staging.gilliantunney.com/
```

## After deployment, set up environment:

```bash
ssh gilliap8@pyr-staging.gilliantunney.com "cd /home3/gilliap8/pyr-staging.gilliantunney.com && cp .env.production .env"
```

## Set proper permissions:

```bash
ssh gilliap8@pyr-staging.gilliantunney.com "
    cd /home3/gilliap8/pyr-staging.gilliantunney.com
    find . -type d -exec chmod 755 {} \;
    find . -type f -exec chmod 644 {} \;
    chmod 600 .env
"
```

## SSH Connection Test:

```bash
ssh gilliap8@pyr-staging.gilliantunney.com
```

## Notes:

- Replace `gilliap8` with your actual Bluehost username if different
- Make sure SSH access is enabled in your Bluehost cPanel
- You may need to add your SSH key to Bluehost for passwordless access
