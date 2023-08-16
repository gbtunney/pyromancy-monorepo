<?php
declare( strict_types = 1 );
namespace gPlugin;
// If you are importing a class, you don't have to type "use class", just "use".
require_once __DIR__ . '/frontend.php';
require_once __DIR__ . '/shortcodes.php';

 function bootstrap(): void {
        GPlugin\Frontend\bootstrap();
        GPlugin\ShortCodes\bootstrap();
        }
