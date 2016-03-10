
import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import WebpackDevServer from 'webpack-dev-server';

import schema from './data/schema';

const APP_PORT = 7777;
const rootPath = path.join(__dirname);
const publicPath = path.join(rootPath, '../client');
const config = webpackConfig({ dev: true, APP_PORT, rootPath });
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
  //contentBase: path.join(__dirname, 'build', 'public'),
  proxy: { '/graphql': 'http://localhost:8080' },
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true }
});

// static
app.use(express.static(publicPath));
// app.use('/assets', express.static(__dirname + '/assets'))

app.listen(APP_PORT, () => {
  console.log(`Jurassic-Waves is now running on http://localhost:${APP_PORT}`);
});
