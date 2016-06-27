import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import { grey900 } from 'material-ui/styles/colors'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProfitsActions from '../../actions/profits'

class Image extends Component {
  render() {
    const { index, value } = this.props
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

class Profit extends Component {
  handleChange = (value) => {
    console.log(value)
  }
  loadMore = () => {
    this.setState({
      loading: true
    })
    const { getProfits, page } = this.props
    getProfits(page)
  }
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
    let index = this.state.index
    let profits = $('.profit-box')
    let length = profits.length
    for (let i = index + 1; i < length; i++) {
      $(profits[i]).height(height).addClass(`show-profit-${i - index - 1}`)
      if (i === length - 1) {
        this.setState({
          index: this.props.data.length - 1,
          loading: false
        })
      }
    }
  }
  static propTypes = {
    page: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      index: -1,
      loading: false
    }
  }
  componentDidMount() {
    this.calcHeight()
  }
  componentDidUpdate() {
    if (this.state.loading) {
      this.calcHeight()
    }
  }
  render() {
    let Button
    const { loading } = this.state
    const { data } = this.props

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
    return (
      <div className="profits-section">
        <div className="profits-grid">
          {data.map((value, index) => {
            return (
              <Image key={index} value={value} index={index} />
            )
          })}
        </div>
        <div className="load-profits">{Button}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, page } = state.profits
  return { data, page }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ProfitsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profit)