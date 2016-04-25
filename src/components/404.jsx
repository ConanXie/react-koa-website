import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import { Link } from 'react-router'
import { RaisedButton } from 'material-ui'

const muiTheme = getMuiTheme(null, {userAgent: 'all'})

const notFoundStyle = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  WebkitTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
}

const h1Style = {
  fontSize: '240px',
  color: '#fff',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.20), 0 5px 20px rgba(0, 0, 0, 0.16)'
}

const pStyle = {
  color: '#999'
}

class NotFound extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={notFoundStyle}>
          <h1 style={h1Style}>4<span className="center" style={{margin: '0 30px'}}>0</span>4</h1>
          <p style={pStyle}>PAGE NOT FOUND</p>
          <Link to="/">
            <RaisedButton
              label="返回主页"
              style={{marginTop: '40px'}}
              secondary={true}
              onTouchTap={this.handleTouchTap}
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default NotFound