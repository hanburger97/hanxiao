const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

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
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    // 'url-loader?limit=10000',
                    'img-loader',
                    'file-loader?name=/public/img/[name].[ext]'
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
        compress: true,
        proxy: {
            "/proxy": {
                target: "http://localhost:5000/myfirstproject-13ebe/us-central1",
                secure: false,
                changeOrigin: true
            },
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png',
        }),
        new CopyPlugin({
        patterns: [
            { from: "public", to: "public" },
        ],
        }),
    ],
};