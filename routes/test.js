'use strict'

import koaRouter from 'koa-router'
const router = koaRouter()
import qs from 'querystring'
import request from 'request'

import articleModel from '../data/article'

/**
 * [findArticle 查找文章]
 * @return {[Promise]} [返回查询结果，Promise对象]
 */
var findArticle = () => {
  return new Promise((resolve, reject) => {
    articleModel.findOne((err, doc) => {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}

router.get('/', async (ctx, next) => {
  console.log('test')
  var start = Date.now()
  try {
      var data = await next()
      var article = await findArticle()
  } catch (e) {
      throw e
  }
  let ms = Date.now() - start
  // console.log(data[1])
  // ctx.body = `first: ${ctx.method} ${ctx.url} - ${ms}ms ${data}`
  await ctx.render('test', {
      data: JSON.parse(data),
      time: ms,
      article: article
  })
  // 统计访问量
  articleModel.update({_id: article._id}, {$inc: {viewCount: 1}}, (err) => {
      if (err) throw err
  })
}).get('/', (ctx) => {
  var query = {
    location: '深圳',
    output: 'json',
    ak: 'v4Wf3i6LQtNU0CvL3fScxzIx'
  }
  return new Promise((resolve, reject) => {
    request(`http:\/\/api.map.baidu.com/telematics/v3/weather?${qs.stringify(query)}`, (error, response, body) => {
      if (error) reject(error)
      if (!error && response.statusCode == 200) {
        resolve(body)
      }
    })
  })
})

router.post('/', async (ctx, next) => {
    console.log(ctx.request.body)
    var body = ctx.request.body
    ctx.body = {city: body.city}
})

router.get('/haha', (ctx, next) => {
  ctx.body = '不要老想弄个大新闻'
})

export default router