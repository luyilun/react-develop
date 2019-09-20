const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const resolve = (src) => path.resolve(__dirname, src);

module.exports = {
	entry: resolve('../src/index.js'),
	output: {
		filename: 'bundle.js',
		path: resolve('../dist'),
	},
	module:{
		rules: [
			{
				test: /\.jsx?/,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|less)$/,
				exclude: [/node_modules/], 
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
            					localIdentName: '[path][name]__[local]--[hash:base64:5]',
							}
						}
					}, 
					'less-loader'
				]
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
							outputPath: '../dist/img/'
						}
					}
				]
			}
		],
	},
	resolve: {
		alias: {
			src: resolve('../src')
		},
		extensions: ['.js'], //后缀扩展解析
	},
	plugins: [
		//---html 模板插件---start
		new HtmlWebpackPlugin({
			title: '关于配置与开发环境',
			template: resolve('../public/index.html'), 
		}),
		//---end
	],
};