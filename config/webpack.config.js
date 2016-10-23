const path = require('path')
const webpack = require('webpack')

const node_modules = path.resolve(__dirname, '../node_modules')
const dir_src = path.resolve(__dirname, '../src')
const buildPath = path.resolve(__dirname, '../static')
const publicPath = '/assets/'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    path.resolve(dir_src, 'main.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'less', 'css', '.jpg', '.png']
  },
  output: {
    path: buildPath,
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: buildPath
  },
  module: {
    loaders: [{
      test: /src(\\|\/).+(\.jsx|\.js)?$/,
      exclude: /node_modules/,
      loaders: ['babel?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=react-hot-loader/babel']
    }, {
      test: /\.less$/,
      loader: 'style!css?sourceMap!less'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
}