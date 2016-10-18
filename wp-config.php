<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tedLovett-agency');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_#LS&RiB:u?7^]p^?`y7iKb)VcE<ST:{bdh!o HvH>a?cp-h4&m}KCw=}AXG[G:u');
define('SECURE_AUTH_KEY',  '1N45EA.}K`o7?6#Ai^NVhw^/V!TEKkka6^y][SUVxZ(bq#^dkQ 06 xWkVnsQf. ');
define('LOGGED_IN_KEY',    '=Tu|yS7:;G+=sJ|yD7NsJzPy[W9|FfVVu/6ZmZ64%R-ErGJ^![a*iFEdS[nmadIH');
define('NONCE_KEY',        'ff;CEsC!M]?`t>/~{@ownhWuBI)rm.bIc.S-tS0zD~duC[<~KWv#Gm]/OSKzyD-g');
define('AUTH_SALT',        '.euH`*hjTT6cK3hxlGD1aq(.^G:puuyhFac;!6.,}J{/dF@2C@~okF{itc]rx<D7');
define('SECURE_AUTH_SALT', 'amMb+ggG/Y6T0WMl5=7U)J2tIhaKeq8uPV;mL}lekR45k)AP|oWD5tn(<I+7wgWU');
define('LOGGED_IN_SALT',   'LQu<9{QY22-i0V^s@sd%qA?g,BfuEEvq<_M|Zv`]J1LIgCYsZ8d`#]+6hb+ow5X/');
define('NONCE_SALT',       'fS}U)p#^hLQ$Gt7W3Czt+:]K 34:j#>Mr$fs^>*[c8{MFmH*J%YeA2ilne{.v=;H');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
