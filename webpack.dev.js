/* eslint-disable @typescript-eslint/no-var-requires */
const common = require('./webpack.common');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new WebpackCdnPlugin({
            modules: [
                {
                    name: 'react',
                    var: 'React',
                    path: 'umd/react.development.js',
                },
                {
                    name: 'react-dom',
                    var: 'ReactDOM',
                    path: 'umd/react-dom.development.js',
                },
            ],
            publicPath: 'node_modules',
            crossOrigin: 'annonymous',
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
