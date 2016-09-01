import Koa from 'koa'
import koaRouter from 'koa-router'
import views from 'koa-views'
import serve from 'koa-static'
import convert from 'koa-convert'
import bodyparser from 'koa-bodyparser'
import session from 'koa-generic-session'
import redis from 'koa-redis'

const app = new Koa()
const router = koaRouter()

import webpack from 'webpack'
const webpackConfig = require('./config/webpack.config')
const compiler = webpack(webpackConfig)

/**
 * 中间件
 */
app.keys = ['my-website']
app.use(convert(session({
  store: redis()
})))

app.use(bodyparser())

app
   .use(views(__dirname + '/views', {
     map: {
       html: 'nunjucks'
     },
     extension: 'html'
   }))
   .use(router.routes())
   .use(router.allowedMethods())
   .use(convert(require('koa-webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      hot: true,
      inline: true,
      stats: {
        color: true
      }
    })))
   .use(convert(require('koa-webpack-hot-middleware')(compiler)))
   .use(serve('static'))

/**
 * 路由
 */
import routes from './routes'
routes(app)

/**
 * [404页面]
 */
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.body = { message: e.message }
    ctx.status = e.status || 500
  }
  if (ctx.status !== 404) return
  ctx.status = 404
  ctx.redirect('/404')
})


app.listen(4000, () => {
  console.log('Listening on 4000')
})