import React, { Component } from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
//Needed for onTouchTap
injectTapEventPlugin()

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './reducers/counter'
import routes from './routes'

let store
if (window.__INITIAL_STATE__) {
  store = createStore(reducer, window.__INITIAL_STATE__, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
} else {
  store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
}

render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.querySelector('#app'))