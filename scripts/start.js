const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');
const webpackDevServer = require('webpack-dev-server');

const compiler = webpack(common);
const devServerOptions = Object.assign({}, common.devServer, {
  open: true,
  stats: {
    colors: true,
  }
});

const server = new webpackDevServer(compiler, devServerOptions);

server.listen(3001, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3001');
});
// module.exports = merge(common, {});