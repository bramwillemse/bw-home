const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve('public'),
    publicPath: '/',
    watchContentBase: true,
    writeToDisk: true
  },
  entry: [
    path.resolve('./themes/bw-monochrome/src', 'js', 'main.js'),
    path.resolve('./themes/bw-monochrome/src', 'css', 'main.css'),
  ],
  output: {
    path: path.resolve('./themes/bw-monochrome/assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
  ],
};