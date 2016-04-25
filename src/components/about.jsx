import React from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'

const muiTheme = getMuiTheme(null, {userAgent: 'all'})

class About extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1>haha~~</h1>
          <Link to="/data">data</Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default About