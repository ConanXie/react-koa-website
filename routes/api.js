'use strict'

import koaRouter from 'koa-router'
import fs from 'fs'
const router = koaRouter()

/**
 * 获取博客列表
 */
const getBlogList = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/article.json', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

router.get('/bloglist/:page', async (ctx, next) => {
  let data
  try {
    data = await getBlogList()
  } catch (e) {
    throw e
  }
  ctx.res.writeHead(200, { 'Content-Type': 'application/json' })
  ctx.body = data
})

export default router