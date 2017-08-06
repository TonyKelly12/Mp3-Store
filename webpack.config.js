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
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[ 'css-loader', 'sass-loader'],
          
        }) 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "main.min.js"
  },
  devServer:{
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080, 
    stats: "errors-only",
    
  },
  plugins: [
    
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), 
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: './index.html',
      
    }),
    new ExtractTextPlugin("app.css"),
  ],
};