import React from 'react'
import { Paper } from 'material-ui'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

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
  padding: '20px',
  background: '#fff',
  borderRadius: '2px'
}

class Login extends React.Component {
  handleClick() {
    $('#form-wrap').fadeOut()
  }
  render() {
    return (
      <div style={style} id="form-wrap">
        <div className="shade" onClick={this.handleClick}></div>
        <Paper style={formStyle} zDepth={3} rounded={false}>
          <form action="/login" method="post">
            <TextField
              hintText="用户名"
              underlineFocusStyle={{borderColor: '#ff4081'}}
            /><br/>
            <TextField
              hintText="密码"
              type="password"
              underlineFocusStyle={{borderColor: '#ff4081'}}
            /><br/>
            <FlatButton
              label="登录"
              secondary={true}
              style={{float: 'right'}}
              type="submit"
            />
          </form>
        </Paper>
      </div>
    )
  }
}

export default Login