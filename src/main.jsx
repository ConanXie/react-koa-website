import React, { Component, PropTypes } from 'react'
import $ from 'jquery'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './components/root'
import Index from './components/index'
import Blog from './components/blog'
import BlogList from './components/blog/list'
import BlogDetail from './components/blog/article'
import About from './components/about'
import NotFound from './components/404'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
browserHistory.listen((location) => {
  setTimeout(() => {
    if (location.action === 'POP') {
      return
    }
    window.scrollTo(0, 0)
  })
})

//Needed for onTouchTap
injectTapEventPlugin()


import { createStore, bindActionCreators, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider, connect } from 'react-redux'

/*const initialState = {
  text: 'conan'
}
function app(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text == 'conan' ? 'xiejie' : 'conan'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click the button.'
      }
    default:
      return {
        text: 'conan'
      }
  }
}
let store = createStore(app)
console.log(store)*/

import App from './containers/App'
import reducer from './reducers/counter'
let store = createStore(reducer, applyMiddleware(thunk))


if (window !== 'undefind') {
  render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={App} />
          <Route path="blog" component={Blog}>
            <IndexRoute component={BlogList} />
            <Route path="page/:page" component={BlogList} />
            <Route path="detail/:id" component={BlogDetail} />
          </Route>
          <Route path="about" component={About} />
          <Route path="data" component={About} />
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>
  ), document.querySelector('#app'))
}