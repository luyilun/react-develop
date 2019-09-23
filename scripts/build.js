const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const path = require('path');

const resolve = (src) => path.resolve(__dirname, src);

const config = merge(common({isDev: false}), {
	mode: 'production',
	plugins: [
		//---清除打包后旧文件---start
		new CleanWebpackPlugin(),
		//---end
		//---压缩js代码---start
		new uglifyJSPlugin({
			test: /\.js($|\?)/i,
			sourceMap: true
		}),
		//---end
		//---复制静态文件---start
		new copyPlugin([
			{
				from: resolve('../public/img'),
				to: resolve('../dist/img')
			}
		]),
		//---end
	] 
});

webpack(config, (err, stats)=>{
	process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }))
});