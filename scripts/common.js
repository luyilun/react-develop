const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = (src) => path.resolve(__dirname, src);

function common(param = {}) {
    return {
        entry: resolve('../src/index.js'),
        output: {
            filename: 'bundle.js',
            path: resolve('../dist'),
        },
        module: {
            rules: [
                {
                    test: /\.jsx?/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(css|less)$/,
                    exclude: [/node_modules/],
                    use: [
                        param.isDev ? 'style-loader' : miniCssExtractPlugin.loader, // 此插件会与 'style-loader' 同时使用会有冲突
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                        'less-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    exclude: [/node_modules/],
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: '[hash].[ext]',
                                publicPath: './img/',
                                outputPath: '../dist/img/',
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            alias: {
                src: resolve('../src'),
            },
            extensions: ['.js'], // 后缀扩展解析
        },
        plugins: [
            // ---html 模板插件---start
            new HtmlWebpackPlugin({
                title: '关于配置与开发环境',
                template: resolve('../public/index.html'),
            }),
            // ---end
            // ---抽离 css 为文件---
            new miniCssExtractPlugin({
                filename: './css/[name]-[hash].css',
                chunkFilename: './css/[id]-[hash].css',
            }),
            // ---end
        ],
    };
}
module.exports = common;
