import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import { grey900 } from 'material-ui/styles/colors'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProfitsActions from '../../actions/profits'

/**
 * 单个图片组件
 */
class Image extends Component {
  render() {
    const { value } = this.props
    return (
      <div className="profit-box" style={{backgroundImage: value.image}}>
        <div className="profit-shade" style={{backgroundColor: value.shade}}></div>
        <div className="profit-text">
          <h2>{value.text}</h2>
        </div>
      </div>
    )
  }
}

/**
 * 作品组件
 */

class Profit extends Component {
  /**
   * 加载更多
   */
  loadMore = () => {
    this.setState({
      loading: true
    })
    const { getProfits, page } = this.props
    getProfits(page)
  }
  /**
   * 计算高度，响应式高度，4:3
   * return height
   */
  calcHeight = () => {
    let proportion = 4 / 3
    let width = window.innerWidth
    let height
    if (width > 1280) {
      height = (width / 4) / proportion
    } else if (width > 900 && width <= 1280) {
      height = (width / 3) / proportion
    } else if (width > 480 && width <= 900) {
      height = (width / 2) / proportion
    } else {
      height = width / proportion
    }
    return height
  }
  /**
   * showMore 新的图片动画显示
   */
  showMore = () => {
    let { index } = this.state
    let { data } = this.props
    let profits = $('.profit-box')
    let length = profits.length
    let height = this.calcHeight()
    /**
     * 给新图片设置高度和css动画
     */
    for (let i = index; i < length; i++) {
      $(profits[i]).height(height).addClass(`show-profit-${i - index}`)
      /**
       * 循环完成设置index，和取消加载进度
       */
      if (i === length - 1) {
        this.setState({
          index: data.length,
          loading: false
        })
      }
    }
  }
  /**
   * 显示 this.props.data 中的图片
   */
  showExist = () => {
    let height = this.calcHeight()
    let profits = document.querySelectorAll('.profit-box')
    Array.prototype.forEach.call(profits, (ele, index) => {
      ele.style.height = `${height}px`
      ele.style.opacity = 1
    })
  }
  static propTypes = {
    page: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    done: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      loading: true
    }
  }
  /**
   * 组件渲染完成，仅一次触发
   */
  componentDidMount() {
    const { getProfits, data } = this.props
    /**
     * props.data没有数据则请求数据，有则显示数据
     */
    if (!data.length) {
      getProfits()
    } else {
      this.showExist()
      this.setState({
        loading: false,
        index: data.length
      })
    }
  }
  /**
   * 组件更新
   */
  componentDidUpdate() {
    if (this.state.loading) {
      this.showMore()
    }
  }
  render() {
    let Button
    const { loading } = this.state
    const { data, done } = this.props

    if (!loading) {
      Button = (
        <RaisedButton
          icon={<NavigationExpandMore />}
          onTouchTap={this.loadMore}
        />
      )
    } else {
      Button = (
        <RefreshIndicator
          size={40}
          left={0}
          top={0}
          status="loading"
          style={{ display: 'inline-block', position: 'relative' }}
        />
      )
    }
    /**
     * 没有更多数据
     */
    if (done) {
      Button = null
    }
    return (
      <div className="profits-section">
        <div className="profits-grid">
          {data.map((value, index) => {
            return (
              <Image key={index} value={value} />
            )
          })}
        </div>
        <div className="load-profits">{Button}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, page, done } = state.profits
  return { data, page, done }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ProfitsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profit)