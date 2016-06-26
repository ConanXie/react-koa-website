import React, { Component } from 'react'
import { Link } from 'react-router'
import { Tabs, Tab } from 'material-ui/Tabs'
import { grey900 } from 'material-ui/styles/colors'

const style = {
  tabsStyle: {
    background: 'rgba(100, 100, 100, 0.2)',
    color: '#f00'
  },
  tabStyle: {
    color: grey900
  }
}

const data = [{
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
  componentDidMount() {
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
    $('.profit-box').height(height)
    $('.profit-box').each((i, e) => {
      $(e).addClass(`show-profit-${i}`)
    })
  }
  render() {
    return (
      <div>
        {/*<h1>This is my profits</h1>
        <Tabs tabItemContainerStyle={style.tabsStyle} onChange={this.handleChange}>
          <Tab style={style.tabStyle} label="One" value={0} />
          <Tab style={style.tabStyle} label="Two" value={1} />
          <Tab style={style.tabStyle} label="Three" value={2} />
        </Tabs>*/}
        <div className="profits-grid">
          {data.map((value, index) => {
            return (
              <Image key={index} value={value} index={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Profit