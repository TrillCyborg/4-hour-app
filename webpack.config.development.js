var path = require('path');
var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:8000/__webpack_hmr',
    './src/index',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8000/dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
    }, {
      test: /\.png|\.svg$/,
      loader: 'file-loader',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
