<?php
/**
 * Configuration overrides for WP_ENV === 'production'
 * Use this for Bluehost and other production environments
 */

use Roots\WPConfig\Config;
use function Env\env;

/**
 * Production-specific security settings
 */
Config::define('FORCE_SSL_ADMIN', true);
Config::define('WP_MEMORY_LIMIT', '256M');

/**
 * Disable file modifications in production for security
 */
Config::define('DISALLOW_FILE_EDIT', true);
Config::define('DISALLOW_FILE_MODS', true);

/**
 * WordPress auto-updates (you may want to handle these manually)
 */
Config::define('WP_AUTO_UPDATE_CORE', false);
Config::define('AUTOMATIC_UPDATER_DISABLED', true);

/**
 * Error handling - hide errors from public
 */
Config::define('WP_DEBUG', false);
Config::define('WP_DEBUG_DISPLAY', false);
Config::define('WP_DEBUG_LOG', false);
Config::define('SCRIPT_DEBUG', false);

/**
 * Performance optimizations
 */
Config::define('WP_POST_REVISIONS', 5); // Limit revisions to save database space
Config::define('EMPTY_TRASH_DAYS', 7); // Empty trash weekly instead of monthly

/**
 * Security headers for production
 */
if (!headers_sent()) {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
}
