/* global __dirname */
/* eslint-env node*/

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

module.exports = appConfig => {
  let config = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: [
      'webpack-hot-middleware/client',
      './client/src/app.js'
    ],
    output: {
      path: path.resolve(__dirname, './build'),
      publicPath: '/wp_assets',
      filename: 'app.js'
    },
    resolve: {
      extensions: ['', '.jsx', '.scss', '.js', '.json'],
      modulesDirectories: [
        'node_modules',
        path.resolve(__dirname, './node_modules')
      ]
    },
    module: {
      loaders: [
        {
          test: /(\.js|\.jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel'
        }, {
          test: /(\.scss|\.css)$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!')
        }
      ]
    },
    plugins: [],
    css: [autoprefixer]
  };

  if (!appConfig.dev) {
    // Add minification
    config.plugins.push(
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.optimize.UglifyJsPlugin()
    );
  } else {
    config.plugins.push(
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    );
  }

  return config;
};
