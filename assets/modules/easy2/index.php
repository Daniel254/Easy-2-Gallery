<?php

/**
 * EASY 2 GALLERY
 * Gallery Module for MODx Evolution
 * @author Cx2 <inteldesign@mail.ru>
 * @author Temus <temus3@gmail.com>
 * @author goldsky <goldsky@modx-id.com>
 */
if (IN_MANAGER_MODE != 'true')
    die("<b>INCLUDE_ORDERING_ERROR</b><br /><br />Please use the MODx Content Manager instead of accessing this file directly.");

// Easy 2 Gallery module path
if (!defined('E2G_MODULE_PATH')) {
    define('E2G_MODULE_PATH', MODX_BASE_PATH . 'assets/modules/easy2/');
}
// Easy 2 Gallery module URL
if (!defined('E2G_MODULE_URL')) {
    define('E2G_MODULE_URL', MODX_SITE_URL . 'assets/modules/easy2/');
}

$version = file_get_contents(E2G_MODULE_PATH . '.version');
// Easy 2 Gallery version
if (!defined('E2G_VERSION') || 'E2G_VERSION' !== $version) {
    define('E2G_VERSION', $version);
}

// ALERTS / ERRORS
if (!isset($_SESSION['easy2err']))
    $_SESSION['easy2err'] = array();
if (!isset($_SESSION['easy2suc']))
    $_SESSION['easy2suc'] = array();

$e2gModClassFile = E2G_MODULE_PATH . 'includes/models/e2g.module.class.php';
if (!class_exists('E2gMod') && file_exists(realpath($e2gModClassFile))) {
    include $e2gModClassFile;
} else {
    $output = 'Missing $e2gModClassFile';
}

if (class_exists('E2gPub') && class_exists('E2gMod')) {
    $e2gModule = new E2gMod($modx);

    $output = $e2gModule->explore();
}

return $output;