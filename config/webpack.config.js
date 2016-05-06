const path = require('path')
const webpack = require('webpack')

const node_modules = path.resolve(__dirname, '../node_modules')
const dir_src = path.resolve(__dirname, '../src')
const buildPath = path.resolve(__dirname, '../static')
const publicPath = 'http://localhost:4000/'


module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(dir_src, 'main.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'less', 'css']
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
      loader: 'babel',
      query: {
        presets: ['es2016-node5', 'react', 'stage-0']
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true
  },
  devtool: 'eval-source-map'
}