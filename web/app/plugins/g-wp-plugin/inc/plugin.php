<?php
declare(strict_types=1);
namespace gPlugin;

require_once __DIR__ . '/frontend.php';
require_once __DIR__ . '/shortcodes.php';

function bootstrap(): void
{
    GPlugin\Frontend\bootstrap();
    GPlugin\ShortCodes\bootstrap();
}
