const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
























// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

// module.exports = {

//   // https://webpack.js.org/concepts/entry-points/#multi-page-application
//   entry: {
//     index: './src/index.js',
//     about: './src/about.js'
//   },

//   // https://webpack.js.org/configuration/dev-server/
//   devServer: {
//     port: 8080
//   },

//   // https://webpack.js.org/concepts/plugins/
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "style.css"
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/pages/index.html',
//       inject: true,
//       chunks: ['index'],
//       filename: 'index.html'
//     }),
//     new HtmlWebpackTagsPlugin({ tags: ['./style.css'], append: true }),
//     new HtmlWebpackPlugin({
//       template: './src/pages/about.html',
//       inject: true,
//       chunks: ['about'],
//       filename: 'about.html'
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           "style-loader",
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           "sass-loader"
//         ]
//       }
//     ]
//   }
// };