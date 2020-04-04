const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.postcss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader', 
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
  ]
}

module.exports = merge(baseConfig, config);