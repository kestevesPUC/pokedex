// webpack.mix.js

let mix = require('laravel-mix');
const webpack = require('webpack');

// mix.js('resources/js/app.js', 'dist').setPublicPath('dist');

mix.webpackConfig({
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
        }),
    ]
});

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css');

mix.scripts('resources/js/app.js','public/js/app.js').version();

mix.scripts('resources/js/home/index.js','public/js/home/index.js').version();

mix.scripts(
[
        'resources/js/plugins/jquery-3.4.1.min.js',
        'resources/js/plugins/bootstrap.bundle.js',
        'resources/js/plugins/bootstrap.js',
        'resources/js/plugins/bootstrap.bundle.min.js',
        'resources/js/plugins/bootstrap.min.js'
    ],'public/js/plugins-footer.js').version();
