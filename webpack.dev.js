const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: [path.resolve(__dirname,'src/indexDevEntry.js'),path.resolve(__dirname,'src/indexEntry.js')],
    page: [path.resolve(__dirname,'src/pageDevEntry.js'),path.resolve(__dirname,'src/pageEntry.js')]
  },
  mode: 'development',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src/index.html'),
      chunks: ['index'],
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src/page.html'),
      chunks: ['page'],
      filename: './page.html'
    })
  ]
};
