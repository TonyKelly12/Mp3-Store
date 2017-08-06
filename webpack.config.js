/**
 * Created by toned_000 on 8/5/2017.
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: path.join(__dirname, "src"),
 
  entry: "./js/App.js",
  module: {
    rules: [
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    
    ]
  },
  output: {
    path: __dirname + "dist",
    filename: "./main.min.js"
  },
  plugins: [
    
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), 
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: './index.html',
    }),

  ],
};