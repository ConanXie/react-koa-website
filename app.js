'use strict'

import Koa from 'koa'
import koaRouter from 'koa-router'
import nunjucks from 'koa-nunjucks-2'
import statics from 'koa-static'
import convert from 'koa-convert'
import co from 'co'
import bodyparser from 'koa-bodyparser'

const app = new Koa()
const router = koaRouter()

import webpack from 'webpack'
const webpackConfig = require('./config/webpack.config')
const compiler = webpack(webpackConfig)

/**
 * 中间件
 */
app.use(bodyparser())
   .use(router.routes())
   .use(router.allowedMethods())
   .use(convert(require('koa-webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true
      }
    })))
   .use(convert(require('koa-webpack-hot-middleware')(compiler)))
   .use(convert(statics('static')))

app.context.render = co.wrap(nunjucks({
  ext: 'html',
  path: 'views',
  nunjucksConfig: {
    autoescape: false
  }
}))

/**
 * [404页面]
 */
app.use(async (ctx, next) => {
  await next()
  if (ctx.status !== 404) return
  ctx.status = 404
  ctx.redirect('/404')
})

/**
 * 路由
 */
import index from './routes/index'
// import test from './routes/test'
router.use('/', index.routes())
// router.use('/test', test.routes())

app.listen(4000, () => {
  console.log('Listening on 4000')
})

/*app.context.render = co.wrap(render(app, {
    root: 'views',
    locals: 'static',
    layout: false,
    cache: false,
    debug: true

}))*/