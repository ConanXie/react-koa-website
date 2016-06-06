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
  handleChange = (event, index, category) => {
    this.setState({category})
  }
  submitArticle = (e) => {
    e.preventDefault()
    // console.log(this.refs.form)
    const form = this.refs.form
    let title = form.title.value
    let tags = form.tags.value.split(' ')
    let date = form.date.value
    let category = this.state.category
    let body = form.body.value

    let article = { title, tags, date, category, body }
    console.log(article)
    fetch('/api/write', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `article=${JSON.stringify(article)}`
    })
  }
  constructor(props) {
    super(props)
    this.state = { category: 1, categories: [] }
  }
  componentWillMount() {
    let a = async (params) => {
      try {
        let response = await fetch('/api/category')
        let categories = await response.json()

        this.setState({ categories })
      } catch (e) {
        throw e
      }
    }
    a()
  }
  render() {
    return (
      <div className="main">
        <div className="body">
          <Paper style={style.wrapper} zDepth={1}>
            <h1>write</h1>
            <form name="write" ref="form" onSubmit={this.submitArticle} autoComplete="off">
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
                name="date"
              />
              <SelectField value={this.state.category} onChange={this.handleChange}>
                {this.state.categories.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id} primaryText={value.name} />
                  )
                })}
              </SelectField><br />
              <textarea style={style.textarea} name="body" id="" cols="30" rows="10" placeholder="文章内容" />
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