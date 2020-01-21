const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
      //Styles
      main: [path.resolve(__dirname,'src/wp/main.js')],
      index: [path.resolve(__dirname,'src/wp/index.js')],
      page: [path.resolve(__dirname,'src/wp/page.js')],
      pageYacht: [path.resolve(__dirname,'src/wp/pageYacht.js')],
      yachtList: [path.resolve(__dirname,'src/wp/yachtList.js')]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'distWp'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new CleanWebpackPlugin()
    ]
};
