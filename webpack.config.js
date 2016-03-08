
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default function webpackConfig(appConfig) {
  const { APP_PORT, dev, rootPath } = appConfig;

  /**
   * Explanation: https://github.com/webpack/docs/wiki/configuration
   */
  let config = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: [
      `webpack-dev-server/client?http://localhost:${APP_PORT}`,
      'webpack/hot/dev-server',
      './client/src/index.js'
    ],
    output: {
      path: path.join(rootPath, 'dist', 'dev', 'client'),
      publicPath: '/client/',
      filename: 'bundle.js'
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

  if (!dev) {
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
}
