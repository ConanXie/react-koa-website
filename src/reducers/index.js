'use strict'

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

/**
 * combine reducers
 */

import blog from './blog'
import counter from './counter'

export default combineReducers({
  blog,
  counter,
  routing
})