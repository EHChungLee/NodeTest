"use strict";

var path = require('path');   /* this is build into node */

/* for multi bundle */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared');

/* For creating stylesheet bundle */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('script'),
    /* entry: "./main", */
    entry: {
            about: './aboutPage.js',
            main: './main',
            contact: './contactPage.js'
            },

    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        /* filename: "./bundle.js" */
        filename: "[name].js"  /* for bundle chunking */
    },
    watch: true,   /* added to start with watch mode */
    plugins: [
               new webpack.ProvidePlugin({
                   $: "jquery",
                   jQuery: "jquery"                  
               }), /* make npm installed jquery avaailable to every module without the coding require('jquery')  */

               commonsPlugin,   /* for chunking */
               new ExtractTextPlugin("style.css")
             ],  /* for using commons plugin for chunking bundles for lazy loading */

    devServer: {
        contentBase: "public",     /* default option ".", */
        host: "localhost",
        port: 9000
    },
    module: {
        rules: [ /* Loaders and PreLoaders are now deprecated in v2 */
            //{
            //    test: /\.js$/,
            //    enforce: "pre",   /* for preloaders */
            //    exclude: /node_modules/,
            //    loader: "jshint-loader"
            //},
            { /* css loader */
                test: /\.css$/,
                exclude: /mode_modules/,
                loader: "style-loader!css-loader"   /* loads in reverse, so css-loader first */
            },

            {/* sass loader */
                test: /\.scss$/,
                exclude: /mode_modules/,
                loader: "style-loader!css-loader!sass-loader"   /* loads in reverse, so css-loader first, also we optionally can implement autoprefixer */ 

            },
            {/* less loader */
                test: /\.less$/,
                exclude: /mode_modules/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!autoprefixer-loader!less-loader' })   /* Test extract Text, for Less only - not to push bundle into page */
                                                                                                                  /* note new usage config */
            },
            {/* image and font loader */
                test: /\.(png|jpg|ttf|eot)$/,      /* ttf - truetype font , eot - embedded open type font */
                exclude: /node_modules/,
                loader: "url-loader?limit=10000"
            },
            {/* es6 transpiler */                
                test: [/\.es6$/,/\.jsx?$/],
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    /* to auto look without the extenstions in require files */
    resolve: {
        extensions: ['*', '.js', '.es6', '.jsx']  /* default is '*', '.js' */
    }
    
};