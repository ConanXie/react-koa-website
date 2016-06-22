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
  let store = createStore(reducer, state, applyMiddleware(thunk))
  // 匹配react-router
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
/**
 * api url
 */
const apiUrl = 'http://localhost:4000/api'

router.get('/', async (ctx, next) => {
  console.log(ctx.session)
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