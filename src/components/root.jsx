import React, { Component } from 'react'
import { Link } from 'react-router'
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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Head title="conan" />
          <BackToTop />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Root