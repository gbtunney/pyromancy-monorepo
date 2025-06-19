# Bluehost Deployment Checklist

## ✅ Pre-Deployment (Complete these steps before uploading)

### 1. Environment Setup

- [ ] Create `.env.production` file with your Bluehost database credentials
- [ ] **CRITICAL**: Replace ALL placeholder values in `.env.production`:
    - [ ] `REPLACE_WITH_YOUR_DATABASE_NAME` → Your actual database name
    - [ ] `REPLACE_WITH_YOUR_DATABASE_USER` → Your actual database user
    - [ ] `REPLACE_WITH_YOUR_DATABASE_PASSWORD` → Your actual database password
    - [ ] `REPLACE_WITH_YOUR_DOMAIN.com` → Your actual domain (e.g., pyromancy.org)
- [ ] Generate new WordPress salts at https://roots.io/salts.html
- [ ] Replace all `GENERATE_UNIQUE_KEY_AT_ROOTS_IO_SALTS` with actual generated salts
- [ ] If using `bluehost-config.php` fallback, fill in the same values there
- [ ] Set `WP_DEBUG=false` for production

### 2. Database Setup in Bluehost cPanel

- [ ] Create MySQL database
- [ ] Create database user
- [ ] Assign user to database with full privileges
- [ ] Note down database name, username, and password

### 3. Domain Configuration

- [ ] Ensure your domain points to Bluehost
- [ ] Set document root to the `web` folder (not the project root)

## 📤 Upload Process

### Files to Upload

Upload these to your domain folder in Bluehost:

```
yourdomain.com/
├── web/ (This is your DocumentRoot)
├── config/
├── vendor/
├── composer.json
├── .env (production version)
└── bluehost-config.php (backup option)
```

### Important Notes:

- **DO NOT** upload `.git/`, `node_modules/`, or development files
- The `web` folder should be your DocumentRoot
- Upload `.env` file with production settings

## 🔧 Bluehost cPanel Configuration

### 1. PHP Settings

- [ ] Set PHP version to 7.4 or higher
- [ ] Enable required PHP extensions (check with your plugins)

### 2. File Permissions

Set these permissions:

- [ ] Folders: 755
- [ ] Files: 644
- [ ] `.htaccess`: 644
- [ ] `wp-config.php`: 600

### 3. SSL Certificate

- [ ] Enable SSL certificate in cPanel
- [ ] Force HTTPS redirects

## 🧪 Testing Phase

### Basic Functionality

- [ ] Homepage loads without errors
- [ ] WordPress admin accessible
- [ ] Can log into WordPress dashboard
- [ ] Themes displaying correctly
- [ ] Plugins activated and working

### Security Checks

- [ ] WordPress salts are unique (not 'generateme')
- [ ] Debug mode disabled (`WP_DEBUG=false`)
- [ ] File editing disabled in admin
- [ ] Sensitive files not accessible via browser

### Performance

- [ ] Test site loading speed
- [ ] Check mobile responsiveness
- [ ] Verify caching is working

## 🚨 Troubleshooting Common Issues

### "Internal Server Error (500)"

1. Check file permissions
2. Review `.htaccess` file
3. Check PHP error logs in cPanel

### "Database Connection Error"

1. Verify database credentials in `.env`
2. Ensure database user has proper privileges
3. Check if database server is accessible

### "Site Not Loading"

1. Verify DocumentRoot points to `web` folder
2. Check domain DNS settings
3. Ensure `index.php` exists in `web` folder

### Environment Variables Not Working

If `.env` file isn't working:

1. Use the `bluehost-config.php` file instead
2. Include it in your `wp-config.php` file
3. Contact Bluehost support about .env support

## 📞 Support Resources

- **Bluehost Support**: Contact for server-specific issues
- **WordPress Codex**: For WordPress configuration help
- **Bedrock Documentation**: https://roots.io/bedrock/

## 🔄 Post-Deployment Maintenance

### Regular Tasks

- [ ] WordPress updates
- [ ] Plugin updates
- [ ] Theme updates
- [ ] Security monitoring
- [ ] Regular backups
- [ ] Performance optimization

---

**Remember**: Always keep a backup of your site before making any changes!
