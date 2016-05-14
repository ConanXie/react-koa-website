'use strict'

import koaRouter from 'koa-router'
import request from 'request'
import fs from 'fs'
const router = koaRouter()

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from '../src/reducers/index'

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

/**
 * 匹配react-router
 */
const matchRoutes = (ctx, store) => {
  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    ctx.render('index', {
      root: renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ),
      initialState: JSON.stringify(store.getState())
    })
  })
}

router.get('/', async (ctx, next) => {
  let articles = await getArticles()
  let store = createStore(reducer, {
    counter: {
      count: 100,
      value: 'haha',
      results: articles
    }
  }, applyMiddleware(thunk))
  
  matchRoutes(ctx, store)
})

router.get('about', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(<About />)
  })
})

router.get(['blog', 'blog/list/:page'], async (ctx, next) => {
  let response = await fetch(`http://localhost:4000/api/bloglist/${ctx.query.page}`)
  let list = await response.json()
  let store = createStore(reducer, {
    bloglist: {
      list
    }
  }, applyMiddleware(thunk))
  
  matchRoutes(ctx, store)
})

router.get('404', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(<NotFound />)
  })
})

var getData = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
      resolve('haha')
    // }, 1000)
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

router.post('/', async (ctx, next) => {
  let query = ctx.request.body
  let data = await getData()
  let articles = await getArticles()
  ctx.body = {
    counter: 100,
    value: 'init',
    ...query,
    data: data,
    results: articles
  }
})

router.post('blog', async (ctx, next) => {
  ctx.body = {
    blog: 'blog'
  }
})
/*router.post('profit', async (ctx, next) => {
  ctx.body = {
    blog: 'profit'
  }
})*/

export default router