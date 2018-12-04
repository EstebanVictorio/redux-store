var path = require('path');
var webpack = require('webpack');
var HWP = require('html-webpack-plugin');


let config = {
  mode: 'development',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    index: path.resolve(__dirname, '') + '/index.jsx'
  },
  plugins: [
    new HWP({
      template: "index.ejs",
      inject: "body",
      filename: "../index.html"
    })
  ],
  resolve: {
    extensions: ['.js','.jsx'],
    alias: {
      Container: path.resolve(__dirname, 'Component') + '/Container',
      Presentational: path.resolve(__dirname, 'Component') + '/Presentational',
      Store: path.resolve(__dirname, '') + '/Store'
    }
  },
  output: {
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env','babel-preset-react'],
            plugins: [
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ]
  }

};

module.exports = config;
