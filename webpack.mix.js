const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    }
});

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/main.js', 'public/js')
    .js('resources/vendor/jquery/jquery.min.js', 'public/js')
    .js('resources/vendor/bootstrap/js/bootstrap.bundle.min.js', 'public/js')
    .js('resources/vendor/jquery.easing/jquery.easing.min.js', 'public/js')
    .js('resources/vendor/php-email-form/validate.js', 'public/js')
    .js('resources/vendor/isotope-layout/isotope.pkgd.min.js', 'public/js')
    .js('resources/vendor/venobox/venobox.min.js', 'public/js')
    .js('resources/vendor/owl.carousel/owl.carousel.min.js', 'public/js')
    .js('resources/vendor/aos/aos.js', 'public/js')
    .postCss('resources/vendor/bootstrap/css/bootstrap.min.css', 'public/css')
    .postCss('resources/vendor/icofont/icofont.min.css','public/css')
    .postCss('resources/vendor/boxicons/css/boxicons.min.css', 'public/css')
    .postCss('resources/vendor/venobox/venobox.css', 'public/css')
    .postCss('resources/vendor/owl.carousel/assets/owl.carousel.min.css', 'public/css')
    .postCss('resources/vendor/aos/aos.css', 'public/css')
    .postCss('resources/css/app.css', 'public/css');
