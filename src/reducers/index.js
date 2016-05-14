'use strict'

import { combineReducers } from 'redux'

/**
 * combine reducers
 */

import bloglist from './bloglist'
import counter from './counter'

export default combineReducers({
  bloglist,
  counter
})