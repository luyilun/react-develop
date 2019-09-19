const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
				use: ['style-loader', 'css-loader', 'less-loader']
			},
		],
	},
	resolve: {
		alias: {
			src: resolve('../src')
		},
		extensions: ['.js'], //后缀扩展解析
	},
	plugins: [
		new CleanWebpackPlugin(),
		//---html 模板插件---start
		new HtmlWebpackPlugin({
			title: '关于配置与开发环境',
			template: resolve('../public/index.html'), 
		}),
		//---end
	],
};