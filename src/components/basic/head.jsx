import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { ListItem } from 'material-ui/List'
import ActionHome from 'material-ui/svg-icons/action/home'
import EditorFormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import ImageLandscape from 'material-ui/svg-icons/image/landscape'
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add'
import IconMenu from 'material-ui/IconMenu'
import { lightBlue500, lightBlue100 } from 'material-ui/styles/colors'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as BlogActions from '../../actions/blog'

import Login from './login'

const style = {
  position: 'fixed',
  top: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: lightBlue500
}
const iconStyle = {
  padding: 0,
  width: '30px',
  height: '30px'
}
const perosnIcon = {
  height: '32px'
}

class Head extends Component {
  handleLogin(e) {
    $('#form-wrap').fadeIn()
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  getLoginStatus = (status) => {
    this.setState({
      status
    })
  }
  initBlogData = () => {
    const { blogList, getPagination } = this.props
    blogList()
    getPagination()
  }
  logout = () => {
    this.setState({
      status: false
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      status: false
    }
  }
  render() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    
    const { blogList, getPagination } = this.props
    const { status } = this.state

    let RightComponent
    if (!status) {
      RightComponent = (
        <div className="right" onClick={this.handleLogin}>
          <IconButton style={iconStyle}>
            <SocialPersonAdd color={lightBlue100} hoverColor={'#fff'} style={perosnIcon} />
          </IconButton>
        </div>
      )
    } else {
      RightComponent = (
        <div className="right">
          <IconMenu
            iconButtonElement={<IconButton style={iconStyle}><SocialPerson color={lightBlue100} hoverColor={'#fff'} style={perosnIcon} /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="退出" onTouchTap={this.logout} />
          </IconMenu>
        </div>
      )
    }

    return (
      <Paper style={style} zDepth={1} rounded={false} id="header">
        <header>
          <div className="subheader top">
            <div className="status-bar">
              <div className="left">{`${hours} : ${minutes}`}</div>
              {RightComponent}
            </div>
          </div>
          <div className="subheader bottom">
            <div className="nav-bar">
              <IconButton className="menu-btn" onTouchTap={this.handleToggle}>
                <NavigationMenu color="#ffffff" />
              </IconButton>
              <Drawer className="slide-menu" docked={false} width={270} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                <div className="slide-menu-header">
                  
                </div>
                {/*<MenuItem onTouchTap={this.handleClose} style={{textAlign: 'left'}}>谢杰</MenuItem>*/}
                {/*<MenuItem onTouchTap={this.handleClose} style={{textAlign: 'left'}}>是大神</MenuItem>*/}
                {/*<MenuItem onTouchTap={this.handleClose} style={{textAlign: 'left'}}>
                  <Link to="/" style={menuLink}>
                    主页
                  </Link>
                </MenuItem>*/}
                <IndexLink to="/" className="slide-menu-link" activeClassName="active">
                  <MenuItem onTouchTap={this.handleClose} primaryText="主页" leftIcon={<ActionHome />} />
                </IndexLink>
                <Link to="/blog" className="slide-menu-link" activeClassName="active">
                  <MenuItem onTouchTap={this.handleClose} onClick={this.initBlogData} primaryText="博客" leftIcon={<EditorFormatListBulleted />} />
                </Link>
                <Link to="/profit" className="slide-menu-link" activeClassName="active">
                  <MenuItem onTouchTap={this.handleClose} primaryText="作品" leftIcon={<ImageLandscape />} />
                </Link>
                <Link to="/about" className="slide-menu-link" activeClassName="active">
                  <MenuItem onTouchTap={this.handleClose} primaryText="关于" leftIcon={<ActionInfoOutline />} />
                </Link>
                <Link to="/contact" className="slide-menu-link" activeClassName="active">
                  <MenuItem onTouchTap={this.handleClose} primaryText="联系" leftIcon={<CommunicationEmail />} />
                </Link>
              </Drawer>
              <div className="page-title">主页</div>
              <div className="logo">{this.props.title}</div>
              <nav>
                <ul>
                  <li><IndexLink to="/" activeClassName="active">主页</IndexLink></li>
                  <li onClick={this.initBlogData}><Link to="/blog" activeClassName="active">博客</Link></li>
                  <li><Link to="/profit" activeClassName="active">作品</Link></li>
                  <li><Link to="/about" activeClassName="active">关于</Link></li>
                  <li><Link to="/contact" activeClassName="active">联系</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <Login callbackParent={this.getLoginStatus} />
      </Paper>
    )
  }
}
Head.propTypes = {
  blogList: PropTypes.func.isRequired,
  getPagination: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(BlogActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Head)