
import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import WebpackDevServer from 'webpack-dev-server';

import schema from './data/schema';

const APP_PORT = 8000;
const config = webpackConfig({ dev: true, APP_PORT });
const compiler = webpack(config);
const graphQLServer = express();

graphQLServer.use('/', () => {
  graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema
  });
});

graphQLServer.listen(8080, () => {
  console.log('GraphQL server is now running on http://localhost:8080');
});

const app = new WebpackDevServer(compiler, {
  // contentBase: '/public/',
  proxy: { '/graphql': 'http://localhost:8080' },
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true }
});

// view config
// app.set('view engine', 'jade')

// static
app.use('/', express.static( path.join(__dirname, '/public')));
// app.use('/assets', express.static(__dirname + '/assets'))

app.listen(APP_PORT, () => {
  console.log('Jurastic-Waves is now running on http://localhost:8000');
});
