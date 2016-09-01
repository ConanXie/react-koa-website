import React, { Component, cloneElement } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Head from './basic/head'
import Login from './basic/login'
import BackToTop from './basic/backtotop'

const muiTheme = getMuiTheme(null, {userAgent: 'all'})

class Root extends Component {
  render() {
    const { children, location } = this.props 
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Head title="conan" />
          <BackToTop />
          {/*this.props.children*/}
          <ReactCSSTransitionGroup
            component="div"
            className="page-wrapper"
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {cloneElement(children, {
              key: location.pathname
            })}
          </ReactCSSTransitionGroup>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Root