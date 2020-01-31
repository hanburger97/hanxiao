const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const data = require('./config/data.json');

module.exports = {
    entry: ['babel-polyfill','./src/client/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'babel.config.js'),
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 8030,
        open: true,
        compress: true
    },
    externals: {
        'data': JSON.stringify(data)
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png',
        }),
    ],
};