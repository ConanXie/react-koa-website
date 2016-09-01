'use strict'

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

/**
 * combine reducers
 */

import blog from './blog'
import counter from './counter'
import sign from './sign'
import profits from './profits'

export default combineReducers({
  blog,
  counter,
  sign,
  profits,
  routing
})