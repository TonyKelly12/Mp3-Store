/**
 * Created by toned_000 on 8/5/2017.
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/main.js",
  module: {
    rules: [
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "main.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};