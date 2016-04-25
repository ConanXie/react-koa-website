import $ from 'jquery'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Paper } from 'material-ui'
import { lightBlue500 } from 'material-ui/lib/styles/colors'

const style = {
  position: 'fixed',
  top: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  fontFamily: 'Arial, 微软雅黑',
  backgroundColor: lightBlue500
}

class Head extends Component {
  handleLogin(e) {
    $('#form-wrap').fadeIn()
  }
  render() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes

    return (
      <Paper style={style} zDepth={1} rounded={false} id="header">
        <header>
          <div className="subheader top">
            <div className="status-bar">
              <div className="left">{`${hours} : ${minutes}`}</div>
              <div className="right" onClick={this.handleLogin}>login</div>
            </div>
          </div>
          <div className="subheader bottom">
            <div className="nav-bar">
              <div className="logo">{this.props.title}</div>
              <nav>
                <ul>
                  <li><Link to="/">主页</Link></li>
                  <li><Link to="/blog">博客</Link></li>
                  <li><Link to="/profit">作品</Link></li>
                  <li><Link to="/about">关于</Link></li>
                  <li><Link to="/contact">联系</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </Paper>
    )
  }
}

export default Head