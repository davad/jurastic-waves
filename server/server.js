'use strict';

require('babel-register');

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import favicon from 'favicon';
import graphQLHTTP from 'express-grahpql';
import WebpackDevServer from 'webpack-dev-server';

import { Schema } from './data/schema'; 

const config = webpackConfig();
const compiler = webpack(config);
const graphQLServer = express();

graphQLServer.use('/', () => 
    graphQLHTTP({
        graphiql: true,
        pretty: true,
        schema: Schema
    })
)

graphQLServer.listen(8080, () => {
    console.log(`GraphQL server is now running on http://localhost:8080`);
})

var app = new WebpackDevServer(compiler, {
  //contentBase: '/public/',
  proxy: {'/graphql': `http://localhost:8080`},
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static( path.join(__dirname, '/dist')))

app.use(favicon(__dirname + '/public/favicon.ico'))

// config
app.set('view engine', 'jade')

// static
app.use('/assets', express.static(__dirname + '/assets'))
