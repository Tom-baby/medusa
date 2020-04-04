// const devMode = process.env.NODE_ENV === 'development';
const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.postcss$/,
        use: [
          'vue-style-loader',
          {   
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    proxy: {
        '/login/*': {
          target: 'https://github.com',
          changeOrigin: true
        },
        '/user/*': {
            target: 'https://api.github.com',
            changeOrigin: true
        }
      }
  },
}

module.exports = merge(baseConfig, config);