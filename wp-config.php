<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cms' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'w0jA-)d,MA8Mrd^H5MYC4kAe_(<YmGdV:Wb[kvchv<7C1kUM?M^fv>Kt>x%rL1z5' );
define( 'SECURE_AUTH_KEY',  '~cz MC%wZ1^S4@I.ew$)m!zu?{O?0F]i?WOMj$3F[kl^;h~{4t;5zFa2du^+T23L' );
define( 'LOGGED_IN_KEY',    'q`<$7UNYTt74<|NQX54zu=^uS6q&%if0w*?[Nh$e2:U_iNe)!+A/Vx!1N}HI|Y~N' );
define( 'NONCE_KEY',        'e^bNnyO2OXX1bZE1W!!^<) azlm$)F]d$7=8iFN#k%}R(6zM 5IjRAzfpCf?sn1]' );
define( 'AUTH_SALT',        'I.W-:0.+bu.PR6;qMqYZYrI7]6;FN$LSg,/|v&mai$XC`AtQj+NBj4mX/7g^J@u1' );
define( 'SECURE_AUTH_SALT', ',FNIwmleEyY/23j!9qH<sKa_/[s2^=[#^[pF4LV7oWR4 %/&zL)@1 %T*e82z=DM' );
define( 'LOGGED_IN_SALT',   'vZkDeH[j6Z+(BD=o/W|%_;Y8s7/XMIleGo``!T<w*cpLie,{k!`JZFDd#`g;%Mu)' );
define( 'NONCE_SALT',       '*[fV5$<}+3+[a>(PggJ6$?@aq4bCFxLJ;$.%<S-krg-WJ[hUNcX|iEGt(P6;~XFd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'SURECART_ENCRYPTION_KEY', 'q`<$7UNYTt74<|NQX54zu=^uS6q&%if0w*?[Nh$e2:U_iNe)!+A/Vx!1N}HI|Y~N' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
