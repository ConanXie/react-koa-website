import $ from 'jquery'
import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { lightBlue500 } from 'material-ui/styles/colors'

const style = {
  position: 'fixed',
  top: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  fontFamily: 'Arial, 微软雅黑',
  backgroundColor: lightBlue500
}

const menuLink = {
  display: 'inline-block',
  width: '100%',
  height: '100%',
  color: 'inherit'
}

class Head extends Component {
  handleLogin(e) {
    $('#form-wrap').fadeIn()
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  handleClose() {
    this.setState({
      open: false
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
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
              <IconButton className="menu-btn" onTouchTap={e => this.handleToggle()}>
                <NavigationMenu color="#ffffff" />
              </IconButton>
              <Drawer className="slide-menu" docked={false} width={270} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                <div className="slide-menu-header">
                  
                </div>
                {/*<MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>谢杰</MenuItem>*/}
                {/*<MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>是大神</MenuItem>*/}
                <MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>
                  <Link to="/" style={menuLink}>
                    主页
                  </Link>
                </MenuItem>
                <MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>
                  <Link to="/blog" style={menuLink}>
                    博客
                  </Link>
                </MenuItem>
                <MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>
                  <Link to="/profit" style={menuLink}>
                    作品
                  </Link>
                </MenuItem>
                <MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>
                  <Link to="/about" style={menuLink}>
                    关于
                  </Link>
                </MenuItem>
                <MenuItem onTouchTap={e => this.handleClose()} style={{textAlign: 'left'}}>
                  <Link to="/contact" style={menuLink}>
                    联系
                  </Link>
                </MenuItem>
              </Drawer>
              <div className="page-title">首页</div>
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