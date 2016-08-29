'use strict'

import koaRouter from 'koa-router'
import request from 'request'
import fs from 'fs'
const router = koaRouter()

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from '../src/reducers/index'

import routes from '../src/routes'

/**
 * 生成服务器端store和匹配routes
 */
const storeAndRoutes = (ctx, state) => {
  const store = createStore(reducer, state, applyMiddleware(thunk))
  // 匹配react-router
  /*return new Promise((resolve, reject) => {
    match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
      const render = ctx.render('index', {
        root: renderToString(<h1>123</h1>),
        initialState: JSON.stringify(store.getState())
      })
      if (!error) {
        resolve(render)
      }
    })
  })*/
  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    /*ctx.render('index', {
      root: renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ),
      initialState: JSON.stringify(store.getState())
    })*/
    const root = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )
    const initialState = JSON.stringify(store.getState())
    ctx.body = `
      <!DOCTYPE html>
      <html lang="zh">
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          <title>conan</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon-180x180.png" />
          <link rel="icon" type="image/png" href="/images/favicons/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="shortcut icon" type="image/x-icon" href="/images/favicons/favicon.ico" />
          <meta name="theme-color" content="#0288D1">
          <link rel="stylesheet" href="/css/default.css" />
      </head>
      <body>
          <div id="app">
              <div>${root}</div>
          </div>
          <footer>
              <p>&copy;2016 xie jie. All rights reserved.</p>
          </footer>
          <script src="/js/lib/jquery.min.js"></script>
          <script src="/js/main.js"></script>
          <script>
            window.__INITIAL_STATE__ = ${initialState}
          </script>
          <script src="/assets/bundle.js"></script>
      </body>
      </html>
    `
  })
}
/**
 * api url
 */
const apiUrl = 'http://localhost:4000/api'

router.get('/', async (ctx, next) => {
  console.log(ctx.state)
  let articles = await getArticles()
  let counter = {
    count: 100,
    value: 'haha',
    results: articles
  }
  storeAndRoutes(ctx, { counter })
})

router.get(['about', 'write'], async (ctx) => {
  storeAndRoutes(ctx)
})

router.get(['blog', 'blog/page/:page'], async (ctx, next) => {
  let page = ctx.params.page || 1
  let list, pagination
  try {
    let resList = await fetch(`${apiUrl}/blog/list/${page}`)
    list = await resList.json()
    
    let resPagination = await fetch(`${apiUrl}/blog/pagination/${page}`)
    pagination = await resPagination.json()
  } catch (e) {
    throw e
  }
  
  let blog = { list, pagination }
  
  storeAndRoutes(ctx, { blog })
})

router.get('profit', async (ctx, next) => {
  storeAndRoutes(ctx)
})

router.get('404', async (ctx, next) => {
  storeAndRoutes(ctx)
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

export default router