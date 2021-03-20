/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const config = require('./webpack.config.default');

module.exports = {
  ...config,
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    open: 'Firefox',
    liveReload: true,
    publicPath: '/',
    port: 3000,
    historyApiFallback: {
      index: '/',
    },
  },
  plugins: [
    new DefinePlugin({ 'process.env': JSON.stringify(dotenv.config().parsed) }),
    new HTMLWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      filename: 'index.html',
      baseUrl: '/',
    }),
  ],
};
