import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
//Needed for onTouchTap
injectTapEventPlugin()

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import reducer from './reducers/index'
import Routes from './Routes'

let store
if (window.__INITIAL_STATE__) {
  store = createStore(reducer, window.__INITIAL_STATE__, compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
} else {
  store = createStore(reducer, compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
}

const history = syncHistoryWithStore(browserHistory, store)
if (typeof window !== 'undefined') {
  history.listen(location => {
    setTimeout(() => {
      /*if (location.action === 'POP') {
        return
      }*/
      window.scrollTo(0, 0)
    })
  })
}
render((
  <Provider store={store}>
    <Router history={history} routes={Routes} />
  </Provider>
), document.querySelector('#app'))

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextRoutes = require('./Routes').default(store)
    console.log(NextRoutes)
    render((
      <Provider store={store}>
        <Router history={history} routes={NextRoutes} />
      </Provider>
    ), document.querySelector('#app'))
  })
}

module.exports = store