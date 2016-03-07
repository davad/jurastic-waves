
import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import WebpackDevServer from 'webpack-dev-server';

import schema from './data/schema'; 

const config = webpackConfig();
const compiler = webpack(config);
const graphQLServer = express();

graphQLServer.use('/', () => 
    graphQLHTTP({
        graphiql: true,
        pretty: true,
        schema
    })
)

graphQLServer.listen(8080, () => {
    console.log(`GraphQL server is now running on http://localhost:8080`);
})

var app = new WebpackDevServer(compiler, {
  //contentBase: '/public/',
  proxy: { '/graphql': 'http://localhost:8080' },
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

app.use(require('webpack-hot-middleware')(compiler));

// view config
app.set('view engine', 'jade')

// static
app.use('/', express.static( path.join(__dirname, '/public')))
//app.use('/assets', express.static(__dirname + '/assets'))

app.listen(8000, () => {
  console.log('Jurastic-Waves is now running on http://localhost:8000');
})
