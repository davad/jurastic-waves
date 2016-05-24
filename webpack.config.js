
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
      path: path.join(rootPath, '/dist/'),
      publicPath: '/',
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
          loader: 'babel',
          query: {
            plugins: [path.join(__dirname, 'babelRelayPlugin')]
          }
        }, {
          test: /(\.scss|\.css)$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!')
        }, {
          test: /\.png$/,
          loader: 'url-loader?mimetype=image/png'
        }, {
          test: /\.jpg$/,
          loader: 'url-loader?mimetype=image/jpg'
        }, {
          test: /\.jpeg$/,
          loader: 'url-loader?mimetype=image/jpeg'
        }
      ]
    },
    plugins: [],
    css: [autoprefixer]
  };

  if (!dev) {
    // Add minification
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
    );
  } else {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    );

    config.plugins.push(
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new HtmlWebpackPlugin({
        template: 'client/index.html',
        favicon: 'client/favicon.ico'
      })
    );
  }

  return config;
}
