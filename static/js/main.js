'use strict'

$(() => {
  /**
   * 页面加载完成去掉加载动画
   */
  // $('.preload').fadeOut()
  /**
   * [更新首页时间]
   */
  setInterval(() => {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    $('header .status-bar .left').html(`${hours} : ${minutes}`)
  }, 1000)
  /**
   * [顶部导航栏收缩和展开，返回顶部按钮显示和隐藏]
   */
  window.onscroll = () => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop <= 40) {
      $('#header').removeClass('sticky')
      $('.back-to-top').removeClass('button-show')
    } else if (scrollTop > 40 && scrollTop < 300) {
      $('#header').addClass('sticky')
      $('.back-to-top').removeClass('button-show')
    } else {
      $('#header').addClass('sticky')
      $('.back-to-top').addClass('button-show')
    }
  }
})