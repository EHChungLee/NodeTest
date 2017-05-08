"use strict";

module.exports = {
    entry: "./script/main.js",
    output: {
        filename: "./script/bundles/bundle.js"
    },
    watch: true,   /* added to start with watch mode */

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        rules: [ /* Loaders and PreLoaders are now deprecated in v2 */
            {
                test: /\.js$/,
                enforce: "pre",   /* for preloaders */
                exclude: /node_modules/,
                loader: "jshint-loader"
            },
            {
                /* test: /\.jsx?$/, */
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    /* to auto look without the extenstions in require files */
    resolve: {
        extensions: ['*', '.js', '.es6']  /* default is '', '.js' */
    }
    
};