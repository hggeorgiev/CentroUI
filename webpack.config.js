const webpack = require('webpack')
const path = require('path')

module.exports = {
    // put sourcemaps inline
    devtool: 'eval',

    // entry point of our application, within the `src` directory (which we add to resolve.modules below):
    entry: [
        'index.tsx'
    ],

    // configure the output directory and publicPath for the devServer
    output: {
        filename: 'app.js',
        publicPath: 'dist',
        path: path.resolve('dist')
    },

    // configure the dev server to run
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
    },

    // tell Webpack to load TypeScript files
    resolve: {
        // Look for modules in .ts(x) files first, then .js
        extensions: ['.ts', '.tsx', '.js'],

        // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
        modules: ['src', 'node_modules'],
    },

    module: {
        loaders: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') }
        ]
    },
}