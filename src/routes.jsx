import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Redirect } from 'react-router'

import Root from './components/root'
import Index from './components/index'
import Blog from './components/blog'
import BlogList from './components/blog/list'
import BlogDetail from './components/blog/article'
import About from './components/about'
import NotFound from './components/404'
import Counter from './components/counter'

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Counter} />
    <Route path="blog" component={Blog}>
      <IndexRoute component={BlogList} />
      <Route path="page/:page" component={BlogList} />
      <Route path="detail/:id" component={BlogDetail} />
    </Route>
    <Route path="about" component={About} />
    <Route path="data" component={About} />
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </Route>
)

export default routes