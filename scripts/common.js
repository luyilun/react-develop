const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const resolve = (src) => path.resolve(__dirname, src);

module.exports = {
	mode: 'development',
	entry: resolve('../src/index.js'),
	output: {
		path: resolve('dist'),
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				test: /\.jsx?/,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader', 
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},
			{
				test: /\.(css|less)$/,
				exclude: [/node_modules/], 
				use: ['style-loader', 'css-loader', 'less-loader']
			},
		],
	},
	devtool: 'inline-source-map', //开发模式用的文件映射功能
	devServer: {
		contentBase: './dist', //静态文件路劲
		hot: true, //热加载
		compress: true, //压缩gzip
		// color: true, //命令行log颜色（该属性只用于命令行）
		host: '127.0.0.1', //域名
		port: 3001, //端口
		open: true, //打开默认浏览器
		// progress: true, //进度（该属性只用于命令行）
	},
	resolve: {
		alias: {
			src: resolve('../src')
		},
		extensions: ['.js'], //后缀扩展解析
	},
	plugins: [
		//---html 模板插件---start
		new HtmlWebpackPlugin({template: resolve('../public/index.html')}),
		//---end
		//---模块热更新插件---start
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		//---end
	],
};