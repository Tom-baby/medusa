const path = require('path');
// const { VueLoaderPlugin } = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry : {
    index: path.resolve(__dirname, '../src/index.js'),
    vander: ['vue', 'axios']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[name].[hash].js',
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)|(vue)|(postcss)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'dist')],
        options: {
          fix: true,
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        }, 
      },
      {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader'
     },
    ]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, '../node_modules')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new StylelintWebpackPlugin({
      fix: true,
      // configFile: path.resolve(__dirname, '../../stylelint.config.js'),
      // context: path.resolve(baseDir, WEBPACK_DEV_DIR),
      files: 'src/**/*.(vue|postcss)',
      cache: true,
    }),
  ],
};

module.exports = baseConfig;