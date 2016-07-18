const path = require('path')
const webpack = require('webpack')

const node_modules = path.resolve(__dirname, '../node_modules')
const dir_src = path.resolve(__dirname, '../src')
const buildPath = path.resolve(__dirname, '../static')
const publicPath = '/assets/'

module.exports = {
  entry: [
    'webpack/hot/dev-server',
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
      loaders: ['react-hot', 'babel?presets[]=es2016-node5&presets[]=react&presets[]=stage-0']
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'cheap-module-eval-source-map'
}