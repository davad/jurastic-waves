require('babel-register');

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import favicon from 'favicon';
import webpackConfig from '../webpack.config';

const config = webpackConfig();
const compiler = webpack(config);
const app = express();

app.use(express.static( path.join(__dirname, '/dist')));

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

// config
app.set('view engine', 'jade');

// static
app.use('/assets', express.static(__dirname + '/assets'));
