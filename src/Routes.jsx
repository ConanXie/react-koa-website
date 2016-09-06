import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Redirect } from 'react-router'

import Root from './components/Root'
import Index from './components/Index'
import Blog from './components/Blog'
import BlogList from './components/blog/List'
import BlogDetail from './components/blog/Article'
import About from './components/About'
import NotFound from './components/404'
import Counter from './components/Counter'
import Write from './components/write/Write'
import Profit from './components/profit/Profit'

const routes = (
  <div>
    <Route path="/" component={Root}>
      <IndexRoute component={Counter} />
      <Route path="blog" component={Blog}>
        <IndexRoute component={BlogList} />
        <Route path="page/:page" component={BlogList} />
        <Route path="detail/:id" component={BlogDetail} />
      </Route>
      <Route path="profit" component={Profit} />
      <Route path="about" component={About} />
      <Route path="data" component={About} />
      <Route path="write" component={Write} />
    </Route>
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </div>
)

export default routes