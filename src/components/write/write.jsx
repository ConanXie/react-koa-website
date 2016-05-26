import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { lightBlue500 } from 'material-ui/styles/colors'

const style = {
  wrapper: {
    padding: 20
  },
  underlineStyle: {
    borderColor: lightBlue500
  },
  floatingLabelStyle: {
    color: lightBlue500
  }
}
class Write extends Component {
  handleChange = (event, index, value) => {
    this.setState({value})
  }
  constructor(props) {
    super(props)
    this.state = { value: 1 }
  }
  
  render() {
    return (
      <div className="main">
        <div className="body">
          <Paper style={style.wrapper} zDepth={1}>
            <h1>write</h1>
            <form name="write" ref="form">
              <TextField
                name="title"
                ref="title"
                floatingLabelText="标题"
                underlineFocusStyle={style.underlineStyle}
                floatingLabelFocusStyle={style.floatingLabelStyle}
              /><br />
              <TextField
                floatingLabelText="标签"
                name="tags"
                ref="tags"
                underlineFocusStyle={style.underlineStyle}
                floatingLabelFocusStyle={style.floatingLabelStyle}
              /><br />
              <SelectField value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Web" />
                <MenuItem value={2} primaryText="Life" />
                <MenuItem value={3} primaryText="IT" />
                <MenuItem value={4} primaryText="Software" />
              </SelectField><br />
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
          </Paper>
        </div>
      </div>
    )
  }
}

export default Write