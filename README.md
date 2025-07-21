## Bedrock

<p>
  <a href="https://roots.io/bedrock/">Website</a> &nbsp;&nbsp; <a href="https://roots.io/bedrock/docs/installation/">Documentation</a> &nbsp;&nbsp; <a href="https://github.com/roots/bedrock/releases">Releases</a> &nbsp;&nbsp; <a href="https://discourse.roots.io/">Community</a>
</p>

## Overview

Bedrock is a WordPress boilerplate for developers that want to manage their projects with Git and Composer. Much of the philosophy behind Bedrock is inspired by the [Twelve-Factor App](http://12factor.net/) methodology, including the [WordPress specific version](https://roots.io/twelve-factor-wordpress/).

- Better folder structure
- Dependency management with [Composer](https://getcomposer.org)
- Easy WordPress configuration with environment specific files
- Environment variables with [Dotenv](https://github.com/vlucas/phpdotenv)
- Autoloader for mu-plugins (use regular plugins as mu-plugins)
- Enhanced security (separated web root and secure passwords with [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt))

## Getting Started

1. Install Lando `$ sh /bin/bash -c "$(curl -fsSL https://get.lando.dev/setup-lando.sh)"`
2. Install Composer [ Composer](https://getcomposer.org/doc/00-intro.md)

## Tech Stack

- Monorepo managed with pnpm
- Node.js (v21+), TypeScript (ESM)
- Vite for web and component builds
- Rollup for libraries/CLI
- Docker for local development
- WordPress (Bedrock, custom theme)
- PHP Composer for backend dependencies
- zsh shell, macOS primary environment

## Helpful Links

- [Lando Docs](https://docs.lando.dev/)
- [Bedrock | Modern WordPress Boilerplate ](https://roots.io/bedrock/)
- [Bedrock with Lando | Bedrock Docs ](https://roots.io/bedrock/docs/bedrock-with-lando/)
- [WordPress Packagist: Manage your plugins and themes with Composer](https://wpackagist.org/)
- [Docker Docs: How to build, share, and run applications](https://docs.docker.com/)

## CMS Stack

- [WordPress.org](https://wordpress.org/)
- [Bricks – Visual Site Builder for WordPress](https://bricksbuilder.io/)
- [Advanced Themer](https://advancedthemer.com/)
- [Bricksforge](https://bricksforge.io/)
- [ACF | Advanced Custom Fields Plugin](https://www.advancedcustomfields.com/)
- [WooCommerce](https://woocommerce.com/)
- [Printful: Custom Print On Demand](https://www.printful.com/)
