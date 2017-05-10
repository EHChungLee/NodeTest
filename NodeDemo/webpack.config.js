"use strict";

var path = require('path');   /* this is build into node */

/* for multi bundle */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');


module.exports = {
    context: path.resolve('script'),
    entry: "./main",
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js',
        filename: "./bundle.js"
    },
    watch: true,   /* added to start with watch mode */

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
            {                
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