const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = merge(common, {
	mode: 'production',
	plugins: [
		new uglifyJSPlugin({
			test: /\.js($|\?)/i,
			sourceMap: true
		})
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