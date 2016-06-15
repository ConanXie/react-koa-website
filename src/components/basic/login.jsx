import React from 'react'
import { Paper } from 'material-ui'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { pinkA200 } from 'material-ui/styles/colors'

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
  display: 'none'
}

const formStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  WebkitTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  padding: '20px 20px 8px',
  background: '#fff',
  borderRadius: '2px'
}
const submitStyle = {
  float: 'right',
  marginTop: '20px'
}

class Login extends React.Component {
  handleClick() {
    $('#form-wrap').fadeOut()
  }
  login = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  watchName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  watchPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: ''
    }
  }
  render() {
    return (
      <div style={style} id="form-wrap">
        <div className="shade" onClick={this.handleClick}></div>
        <Paper style={formStyle} zDepth={3} rounded={false}>
          <form action="/login" method="post" onSubmit={this.login} autoComplete="off">
            <TextField
              hintText="用户名"
              underlineFocusStyle={{borderColor: pinkA200}}
              value={this.state.userName}
              onChange={this.watchName}
            /><br/>
            <TextField
              hintText="密码"
              type="password"
              underlineFocusStyle={{borderColor: pinkA200}}
              value={this.state.password}
              onChange={this.watchPassword}
            /><br/>
            <FlatButton
              label="登录"
              secondary={true}
              style={submitStyle}
              type="submit"
            />
          </form>
        </Paper>
      </div>
    )
  }
}

export default Login