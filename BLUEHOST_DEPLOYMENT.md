# Bedrock WordPress Deployment Guide for Bluehost

## Pre-deployment Checklist

### 1. Environment Configuration

- [ ] Set up environment variables in Bluehost cPanel
- [ ] Configure database connection
- [ ] Set up domain/subdomain pointing to web folder

### 2. File Structure for Upload

Upload these folders/files to your Bluehost account:

```
public_html/ (or your domain folder)
├── web/ (this becomes your document root)
│   ├── index.php
│   ├── wp-config.php
│   ├── .htaccess (already configured)
│   ├── app/
│   └── wp/
├── config/
├── vendor/
└── composer.json
```

## Deployment Steps

### Step 1: Bluehost Configuration

1. **Document Root Setup:**
    - In cPanel → File Manager
    - Navigate to your domain folder (usually `public_html/yourdomain.com`)
    - The DocumentRoot should point to the `web` folder
    - If using a subdomain, create it and point to the `web` folder

### Step 2: Upload Files

1. **Using File Manager or FTP:**
    - Upload your entire project to the domain folder
    - Ensure the `web` folder is at the root level of your domain

### Step 3: Database Setup

1. **Create Database:**
    - In cPanel → MySQL Databases
    - Create a new database
    - Create a database user and assign privileges

### Step 4: Environment Variables

Since Bluehost doesn't support .env files directly, you'll need to:

1. **Option A: Use wp-config.php directly**
2. **Option B: Create a custom environment loader**

### Step 5: File Permissions

Set proper permissions:

- Folders: 755
- Files: 644
- wp-config.php: 600

## Bluehost-Specific Considerations

### 1. PHP Version

- Ensure PHP 7.4+ is selected in cPanel
- Check PHP extensions (especially those required by your plugins)

### 2. Memory Limits

- May need to increase memory limits via php.ini or .htaccess

### 3. Caching

- Bluehost provides built-in caching
- Consider compatibility with your caching plugins

## Post-Deployment

### 1. Test Your Site

- [ ] Homepage loads correctly
- [ ] Admin area accessible
- [ ] Plugins functioning
- [ ] Theme displaying properly

### 2. Security

- [ ] Change WordPress salts
- [ ] Update admin passwords
- [ ] Install security plugins if needed

### 3. Performance

- [ ] Enable caching
- [ ] Optimize images
- [ ] Test site speed

## Troubleshooting

### Common Issues:

1. **500 Internal Server Error:** Check file permissions and .htaccess
2. **Database Connection Error:** Verify database credentials
3. **Plugin Conflicts:** Deactivate plugins and test
4. **Memory Limit Issues:** Increase memory in wp-config.php or php.ini

### Bluehost Support:

- Use their knowledge base for hosting-specific issues
- Contact support for server configuration problems

## Maintenance

### Regular Tasks:

- [ ] WordPress core updates
- [ ] Plugin updates
- [ ] Theme updates
- [ ] Database optimization
- [ ] Backup verification
