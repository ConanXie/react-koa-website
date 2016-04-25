'use strict'

import koaRouter from 'koa-router'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Index from '../src/components/index'
import Root from '../src/components/root'
import About from '../src/components/about'
import NotFound from '../src/components/404'

const router = koaRouter()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(React.createFactory(Index)({title: 'conan'}))
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(React.createFactory(About)())
  })
})

router.get(['blog', 'blog/list/:page', 'blog/detail/:id'], async (ctx, next) => {
  console.log(ctx.params)
  await ctx.render('index', {
    root: renderToString(React.createFactory(Root)())
  })
})

router.get('404', async (ctx, next) => {
  await ctx.render('index', {
    root: renderToString(React.createFactory(NotFound)())
  })
})

export default router