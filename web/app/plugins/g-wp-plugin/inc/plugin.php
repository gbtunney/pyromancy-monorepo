<?php
declare(strict_types=1);
namespace gPlugin;

require_once __DIR__ . '/frontend.php';
require_once __DIR__ . '/shortcodes.php';
require_once __DIR__ . '/bricks/bootstrap.php';

function bootstrap(): void
{
	GPlugin\Frontend\bootstrap();
	GPlugin\ShortCodes\bootstrap();
	GPlugin\Bricks\bootstrap();
}
