<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          '  u]&o>Wz[l%t5_=U4kxi1&[t?J)9]m[OOu,~(+-Kt|,zyxZ.N).:mF|KND<j}wH' );
define( 'SECURE_AUTH_KEY',   'Rc<Q10~m3$XT`m56RjouSm:{Jx,k>?mn39hGfHzcvMzHQ,!fLd^FoJ2wlAGh0CHX' );
define( 'LOGGED_IN_KEY',     'nC~7j)O6nQ%=r~{#w<{sO}i=L21]4G4J8]Am5rHdrNE8IZ~t_tbIu7H)]$4#C[j+' );
define( 'NONCE_KEY',         'wc<@fmpVL_y#)x?4^{w`~imRMB*%MSPa(+t2mD~AzP^#^hsr:AP!H8g>GEOwy|sd' );
define( 'AUTH_SALT',         ',g/e3}p;d;Mjjn,XGdvLdS==M2!p8y_b{(3GvAg/bH;X3@PWRZulR7i{zW;&)utu' );
define( 'SECURE_AUTH_SALT',  '^;Y4EXyqy~f_,~VH7}*7e<yB&v-KR.dCZ}mtkf=G=MfGCymL;qO+[ZCpjEww$Ubd' );
define( 'LOGGED_IN_SALT',    '|oO_M(jZxh6C.U`K@!Bu}+W85<+raL06/3h$1OpMnwAYBmEA|k<1e1U;RU{!;.?`' );
define( 'NONCE_SALT',        'Z)bo8n1<FO:utqzBJu<=QLZ5M>LS4)}dHJ>E)lq90~/xd +]#?|zLRzj0|cf#_.9' );
define( 'WP_CACHE_KEY_SALT', ':EMw+O&7|,*^?@ip7n&V(t?1Q.0Q,b;;ZGPWq2+%r,Ef$dda)6{=rO!ZQn]uw.*H' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
