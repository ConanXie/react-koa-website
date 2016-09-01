'use strict'

require('babel-polyfill')
require('babel-core/register')({
  presets: ['es2015', 'stage-0', 'react']
})
require('./app')