/**
 * Created by toned_000 on 8/5/2017.
 * var debug = process.env.NODE_ENV !== "production";
 */
const glob = require('glob');
const webpack = require('webpack');
const path = require('path');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const PurifyCSSPlugin = require('purifycss-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = process
  .argv
  .indexOf('-p') !== -1; //will return true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    'css-loader', 'sass-loader'
  ],
  publicPath: '/dist'

})

const cssConfig = isProd
  ? cssProd
  : cssDev;
const bootstrapConfig = isProd
  ? bootstrapEntryPoints.prod
  : bootstrapEntryPoints.dev;

module.exports = {
  context: path.join(__dirname, "src"),
//entry point using bottstrap config and babel-poly fill
  entry:  [
    bootstrapConfig, 'babel-polyfill', "./js/Index.js"
  ],
  module: {
    rules: [
      //Test css and sass files and runs css loader and sass loader
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 'sass-loader'
          ],
          publicPath: '/dist'
        })
      },
      //Test all js files and runs them thru the babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=[path][name].[ext]'
      }, {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      }, {
        test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      //bootstrap 3
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      //test exec js files and runs script loader. 
      //For loading third party library
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  },
  //Options for Output of production build
  output: {
    path: __dirname + "/dist/",
    filename: "main.min.js"
  },
  //Development Server Options
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    stats: "errors-only",
    historyApiFallback: true
  },
  plugins: [

    new webpack
      .optimize
      .OccurrenceOrderPlugin(),
    //uglify plugin
      new webpack
      .optimize
      .UglifyJsPlugin({mangle: false, sourcemap: false}),
    
      new HtmlWebpackPlugin({title: 'Portfolio', template: './index.html'}),
   //for the style-loader
      new ExtractTextPlugin({
      filename: '/css/[name].css',
      disable: !isProd,
      allChunks: true
    }),
    
    
    new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery'}),

    new webpack.HotModuleReplacementPlugin(),
   
    new webpack.NamedModulesPlugin(),
   
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'src/*.html'))
    })
  ]
};