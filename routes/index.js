'use strict'

import koaRouter from 'koa-router'
import request from 'request'
import fs from 'fs'
const router = koaRouter()

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import { createStore, bindActionCreators, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from '../src/reducers/counter'

/**
 * components
 */
import Index from '../src/components/index'
import Root from '../src/components/root'
import App from '../src/containers/App'
import Blog from '../src/components/blog'
import BlogList from '../src/components/blog/list'
import About from '../src/components/about'
import NotFound from '../src/components/404'

import routes from '../src/routes'

router.get('/', async (ctx, next) => {
  let articles = await getArticles()
  let store = createStore(reducer, {
    counter: 100,
    value: 'haha',
    results: articles
  }, applyMiddleware(thunk))
  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      ctx.status = 500
    } else if (redirectLocation) {
      
    } else if (renderProps) {
      ctx.status = 200
      
      ctx.render('index', {
        root: renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ),
        initialState: JSON.stringify(store.getState())
      })
    } else {
      ctx.status = 404
    }
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(<About />)
  })
})

router.get(['blog', 'blog/list/:page', 'blog/detail/:id'], async (ctx, next) => {
  console.log(ctx.url)
  await ctx.render('index', {
    root: renderToString(
      <Root>
        <Blog>
          <BlogList />
        </Blog>
      </Root>
    )
  })
})

router.get('404', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(<NotFound />)
  })
})

var getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('haha')
    }, 1000)
  })
}

var getArticles = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('data/article.json', 'utf-8', (err, data) => {
      if (!err) {
        resolve(JSON.parse(data))
      } else {
        reject(err)
      }
    })
  })
}

router.post('data', async (ctx, next) => {
  let query = ctx.request.body
  let data = await getData()
  let articles = await getArticles()
  ctx.body = {
    ...query,
    data: data,
    results: articles
  }
})

export default router