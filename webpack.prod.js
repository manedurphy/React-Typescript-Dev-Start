/* eslint-disable @typescript-eslint/no-var-requires */
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackCdnPlugin({
            modules: [
                {
                    name: 'react',
                    var: 'React',
                    path: 'umd/react.production.js',
                },
                {
                    name: 'react-dom',
                    var: 'ReactDOM',
                    path: 'umd/react-dom.production.js',
                },
            ],
            publicPath: 'node_modules',
            crossOrigin: 'annonymous',
        }),
    ],
});
