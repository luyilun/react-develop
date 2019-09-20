const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');
const webpackDevServer = require('webpack-dev-server');
const config = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map', //开发模式用的文件映射功能
	devServer: {
		contentBase: './dist', //静态文件路劲
		hot: true, //热加载
		compress: true, //压缩gzip
		// color: true, //命令行log颜色（该属性只用于命令行）
		host: 'localhost', //域名
		port: 3002, //端口
		open: true, //打开默认浏览器
		// progress: true, //进度（该属性只用于命令行）
		stats: {
		    colors: true,
		},
		proxy: {
			"/": {
				target: 'http://192.168.1.203:9080',
				bypass: function(req, res, proxyOptions) {
					if (req.headers.accept.indexOf("html") !== -1) {
						//如果是 html 请求就不需要代理
						console.log("Skipping proxy for browser request.");
						return "/index.html";
					}
			    }
			}
		},
	},
	plugins: [
		//---模块热更新插件---start
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		//---end
	]
})
const compiler = webpack(config);

const server = new webpackDevServer(compiler, config.devServer);

server.listen(3002, 'localhost', () => {
  console.log('Starting server on http://localhost:3001');
});
// module.exports = merge(common, {});