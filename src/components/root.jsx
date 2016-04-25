import React, { Component } from 'react'
import { Link } from 'react-router'
import { RaisedButton, AppBar, Paper } from 'material-ui'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'

import Head from './basic/head'
import Login from './basic/login'
import BackToTop from './basic/backtotop'

const muiTheme = getMuiTheme(null, {userAgent: 'all'})

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{paddingTop: '180px'}}>
          <Head title="conan" />
          <Login />
          <BackToTop />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Root