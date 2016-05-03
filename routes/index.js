'use strict'

import koaRouter from 'koa-router'
import { renderToString } from 'react-dom/server'
import request from 'request'
import fs from 'fs'

import { createStore, bindActionCreators, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
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

const router = koaRouter()

router.get('/', async (ctx, next) => {
  let articles = await getArticles()
  let store = createStore(reducer, {
    counter: 100,
    value: 'haha',
    results: articles
  }, applyMiddleware(thunk))
  
  await ctx.render('index', {
    root: renderToString(
      <Provider store={store}>
        <Root>
          <App />
        </Root>
      </Provider>
    ),
    initialState: JSON.stringify(store.getState())
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(<About />)
  })
})

router.get(['blog', 'blog/list/:page', 'blog/detail/:id'], async (ctx, next) => {
  console.log(ctx.params)
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