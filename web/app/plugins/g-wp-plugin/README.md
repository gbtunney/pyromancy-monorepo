# G Plugin Utilities

WordPress plugin with Google Calendar integration using FullCalendar and React, built with Vite.

Check video here [![short demo](https://img.youtube.com/vi/VA3G8ahoHLE/sddefault.jpg)](https://www.youtube.com/watch?v=VA3G8ahoHLE)

<img src="./src/github-images/dashboard.png" />

Caption: <i>Dummy dashboard with custom build vue + tailwind setup (Vite realtime environment)</i><br/>

# How to use ?

- Just clone/fork this repository
- Check the package.json file
- command: `pnpm install`
- command: `pnpm dev` for development and for production: `pnpm build`

## Creating a Distributable Package

To create a ZIP file for distribution or download:

```bash
# Build and create ZIP package
pnpm package

# Or create ZIP without rebuilding
pnpm package:zip

# List all available packages
pnpm package:list
```

The ZIP file will be created in `../packages/` directory with a timestamp and will include:
- Plugin PHP files (`plugin.php`, `inc/`)
- Built assets (`dist/`)
- Composer dependencies (`vendor/`)
- Public files
- GraphQL types
- README

The package excludes development files (source TypeScript, config files, tests, etc.) to keep the distribution size minimal.

On production you only need

- assets
- includes
- wp-plugin-with-vue-tailwind.php (plugin Entry file)

## Now easy enqueue from version 1.0.6

No need to worry about the dev environment enqueue or Production level enqueue. everything here can manage by Vite dedicated class (`includes/Classes/Vite.php`)

Just Call like this

`Vite::enqueueScript($enqueueTag, $yourAdminSourcePath, $dependency = [], $version = null, $inFooter = false)`

Note: same as `wp_enqueue_script`

### Example use case:

<p style="color: green;">
No need to enqueue production manually again, It will enqueue from manifest on production. Just call `Vite::enqueueScript()`</p>

## `Vite::enqueueScript('my-plugin-script-boot', 'admin/start.js', array('jquery'), WPM_VERSION, true)`

### NOT RECOMENDED

If you want to use `wp_enqueue_script` then you have to call both dev and production manually:

(Production and dev enqueue script should like this)

```
if (defined('WPM_DEVELOPMENT') && WPM_DEVELOPMENT !== 'yes') {
    wp_enqueue_script('WPWVT-script-boot', WPM_URL . 'assets/js/start.js', array('jquery'), WPM_VERSION, false);
} else {
    wp_enqueue_script('WPWVT-script-boot', 'http://localhost:8880/' . 'src/admin/start.js', array('jquery'), WPM_VERSION, true);
}


```

If you face any issue feel free to let me know. :)

<br/>

## Vue + Element UI auto command boilerplate

<hr/>
You can check another boilerplate plugin with vue js and element UI, You can create your own project using simple command line on that project within 2 mint.

Check it here: https://github.com/hasanuzzamanbe/wp-boilerplate-plugin-with-vuejs

### Other Setups you may Use

- WordPress Plugin with Vue 3, tailwind (Laravel Mix Build) [https://github.com/hasanuzzamanbe/wp-plugin-with-vue-tailwind]
- WordPress Plugin with Vue 2, Element UI (Laravel Mix Build) [https://github.com/hasanuzzamanbe/wp-boilerplate-plugin-with-vuejs]
