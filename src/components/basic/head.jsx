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
import { lightBlue500 } from 'material-ui/styles/colors'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as BlogActions from '../../actions/blog'

const style = {
  position: 'fixed',
  top: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: lightBlue500
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
  initBlogData = () => {
    const { blogList, getPagination } = this.props
    blogList()
    getPagination()
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
    
    const { blogList, getPagination } = this.props
    
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
                <Link to="/blog/page/1" className="slide-menu-link" activeClassName="active">
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
                  <li onClick={this.initBlogData}><Link to="/blog/page/1" activeClassName="active">博客</Link></li>
                  <li><Link to="/profit" activeClassName="active">作品</Link></li>
                  <li><Link to="/about" activeClassName="active">关于</Link></li>
                  <li><Link to="/contact" activeClassName="active">联系</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
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