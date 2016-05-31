import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import FlatButton from 'material-ui/FlatButton'
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
  },
  textarea: {
    width: '100%',
    margin: '20px 0',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: '14px',
    borderBottom: '1px solid #e0e0e0'
  },
  actionBox: {
    textAlign: 'right'
  }
}
class Write extends Component {
  handleChange = (event, index, value) => {
    this.setState({value})
  }
  submitArticle = (e) => {
    e.preventDefault()
    console.log(this.refs.form)
    return false
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
            <form name="write" ref="form" onSubmit={this.submitArticle}>
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
              <DatePicker
                hintText="发表时间"
              />
              <SelectField value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Web" />
                <MenuItem value={2} primaryText="Life" />
                <MenuItem value={3} primaryText="IT" />
                <MenuItem value={4} primaryText="Software" />
              </SelectField><br />
              <textarea style={style.textarea} name="body" id="" cols="30" rows="10" placeholder="文章内容"></textarea>
              <div className="action-box" style={style.actionBox}>
                <FlatButton label="取消" />
                <FlatButton label="确认" secondary={true} onClick={this.submitArticle}>
                  <input type="submit" hidden />
                </FlatButton>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    )
  }
}

export default Write