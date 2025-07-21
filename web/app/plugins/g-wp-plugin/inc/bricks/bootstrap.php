<?php
declare(strict_types=1);

namespace GPlugin\Bricks;

function bootstrap(): void
{
    add_action('init', __NAMESPACE__ . '\\register_elements', 11);
}

function register_elements(): void
{
    error_log('Bricks register_elements called');
    
    if (!class_exists('\Bricks\Elements')) {
        error_log('Bricks\Elements class not found');
        return;
    }

    error_log('Registering G Calendar element');
    \Bricks\Elements::register_element(__DIR__ . '/elements/calendar-element.php');
}