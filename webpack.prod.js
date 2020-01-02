const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
      index: [path.resolve(__dirname,'src/indexEntry.js')],
      page: [path.resolve(__dirname,'src/pageEntry.js')],
      pageYacht: [path.resolve(__dirname,'src/pageYachtEntry.js')],
      yachtList: [path.resolve(__dirname,'src/yachtListEntry.js')],
    },
    output: {
      filename: '[name].[hash].js'
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'imgs'
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        chunks: ['index'],
        filename: './index.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/page.html'),
        chunks: ['page'],
        filename: './page.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/pageYacht.html'),
        chunks: ['pageYacht'],
        filename: './pageYacht.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/yachtList.html'),
        chunks: ['yachtList'],
        filename: './yachtList.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      }),
      new CleanWebpackPlugin()
    ]
};
