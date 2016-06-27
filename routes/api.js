'use strict'

import koaRouter from 'koa-router'
import fs from 'fs'
const router = koaRouter()

/**
 * mongodb
 */
import mongoose from '../data/config' 
import articleModel from '../data/articles'
import categoryModel from '../data/categories'
import userModel from '../data/users'

/**
 * 获取博客列表
 */
const getBlogList = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/article.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

router.get('/blog/list/:page', async (ctx, next) => {
  let data
  try {
    data = await getBlogList()
  } catch (e) {
    throw e
  }
  ctx.res.writeHead(200, { 'Content-Type': 'application/json' })
  ctx.body = data
})

/**
 * 获取博客数目
 */
router.get('/blog/pagination/:page', async (ctx, next) => {
  let size = 10
  let page = + ctx.params.page
  /**
   * 获取文章总数
   */
  let data
  try {
    data = await getBlogList()
  } catch (e) {
    throw e
  }
  let length = JSON.parse(data).length
  let total = 10 // Math.ceil(length / size)
  /**
   * 计算分页
   */
  let pagination = {
    previous: 0,
    current: 1,
    next: 0
  }
  if (page > 0 && total >= page) {
      pagination.previous = page - 1
      pagination.current = page
      pagination.next = page === total ? 0 : page + 1
  } else {
    pagination = {
      code: '500',
      msg: 'params error'
    }
  }
  ctx.res.writeHead(200, { 'Content-Type': 'application/json' })
  ctx.body = pagination
})

/**
 * 增加文章
 */
router.post('/write', async (ctx) => {
  let article = JSON.parse(ctx.request.body.article)
  console.log(article)
  ctx.status = 200

  articleModel.create(article, err => {
    if (err) {
      console.log(err)
    } else {
      console.log('ok')
    }
  })
})

/**
 * 查询分类
 */
const getCategories = () => {
  return new Promise((resolve, reject) => {
    categoryModel.find({}, (err, doc) => {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}
router.get('/category', async (ctx) => {
  ctx.res.writeHead(200, { 'Content-Type': 'application/json' })
  ctx.body = await getCategories()
})

/**
 * 登录
 */
router.post('/login', async (ctx) => {
  let req = ctx.request.body

  const login = (user, pw) => {
    return new Promise((resolve, reject) => {
      userModel.findOne({ name: user }, (err, doc) => {
        if (err) {
          reject(err)
        } else {
          if (doc) {
            userModel.findOne({ name: user, password: pw }, (err, doc) => {
              if (err) {
                reject(err)
              } else {
                if (doc) {
                  resolve({ code: 0, msg: '登录成功' })
                } else {
                  resolve({ code: 102, msg: '密码错误' })
                }
              }
            })
          } else {
            resolve({ code: 101, msg: '用户不存在' })
          }
        }
      })
    })
  }
  let data = {}
  try {
    data = await login(req.user, req.pw)
    console.log(data)
  } catch (e) {
    throw e
  }
  /*if (!data.code) {
    // 存储登录的session
    ctx.session.user = req.user
    console.log(ctx.session)
  }*/
  ctx.res.writeHead(200, { 'Content-Type': 'application/json' })
  ctx.body = data
})

router.get('/profits/:page', async (ctx) => {
  let page = ctx.query.page
  
  const getProfits = () => {
    return new Promise((resolve, reject) => {
      let data = [{
        image: 'url("/images/profits/shutterstock_187674005-600x403.jpg")',
        shade: 'rgba(255, 87, 46, 0.7)',
        text: 'Oh yeah'
      }, {
        image: 'url("/images/profits/seagul-600x275.jpg")',
        shade: 'rgba(52, 129, 201, 0.7)',
        text: 'Create Prject - Extend'
      }, {
        image: 'url("/images/profits/picjumbo.com_IMG_6850-600x400.jpg")',
        shade: 'rgba(255, 244, 234, 0.7)',
        text: 'Create Prject - Extend'
      }, {
        image: 'url("/images/profits/picjumbo.com_HNCK0082-600x400.jpg")',
        shade: 'rgba(126, 87, 194, 0.7)',
        text: 'Create Prject - Extend'
      }]
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  }
  let data
  try {
    data = await getProfits()
  } catch (e) {
    throw e
  }
  ctx.res.writeHead(200, { 'Content-Type': 'application/json' })
  ctx.body = data
})

/**
 * test
 */
router.post('/test/:param', ctx => {
  console.log(ctx.request.body)
  ctx.body = 'test'
})
router.get('/test/:param', ctx => {
  console.log(ctx.query)
  console.log(ctx.params)
  ctx.body = 'haha'
})

export default router