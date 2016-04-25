'use strict';

require('babel-polyfill');
require('babel-core/register')({
  presets: ['es2016-node5', 'stage-0', 'react']
});
require('./app');