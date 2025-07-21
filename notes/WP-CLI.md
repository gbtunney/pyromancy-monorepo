# WP-CLI

### Maintenance Mode

```sh
# 1. Deactivate all plugins
pnpm exec lando wp plugin deactivate --all

# 2. Update WordPress core
pnpm exec lando wp core update

# 3. Update the database
pnpm exec lando wp core update-db

# 4. Reactivate plugins one by one (safer) or all at once
pnpm exec lando wp plugin activate --all
```

### Reset Password

```sh
# First, see all users (you already have this script)
pnpm run wp:users

# Then reset password for specific user ID
pnpm exec lando wp user update 1 --user_pass=newpassword
```
