import React, { Component, PropTypes } from 'react'
import { Paper } from 'material-ui'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar'
import CircularProgress from 'material-ui/CircularProgress'
import { pinkA200, redA400, green600 } from 'material-ui/styles/colors'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as signActions from '../../actions/sign'

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
  transform: 'translate(-50%, -50%)',
  padding: '20px 4px 8px',
  background: '#fff',
  borderRadius: '2px'
}
const inputStyle = {
  margin: '0 30px 0 20px'
}
const submitStyle = {
  float: 'right',
  marginTop: '20px'
}

class Login extends Component {
  handleClick = () => {
    $('#form-wrap').fadeOut()
    this.setState({
      userName: '',
      password: ''
    })
  }
  login = (e) => {
    e.preventDefault()
    const { login } = this.props
    let { userName, password } = this.state

    login(userName, password)
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
  componentWillReceiveProps(nextProps) {
    /**
     * 登录成功表单隐藏
     */
    if (nextProps.status) {
      setTimeout(() => {
        this.handleClick()
      }, 800)
    }
  }
  render() {
    const { status, snackbar, login, closeSnackbar } = this.props
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
              style={inputStyle}
            /><br/>
            <TextField
              hintText="密码"
              type="password"
              underlineFocusStyle={{borderColor: pinkA200}}
              value={this.state.password}
              onChange={this.watchPassword}
              style={inputStyle}
            /><br/>
            <CircularProgress size={0.3} color={pinkA200} />
            <FlatButton
              label="登录"
              secondary={true}
              style={submitStyle}
              type="submit"
            />
          </form>
        </Paper>
        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          autoHideDuration={1000}
          onRequestClose={closeSnackbar}
          bodyStyle={{ width: '120px', textAlign: 'left', backgroundColor: status ? green600 : redA400 }}
        />
      </div>
    )
  }
}

Login.propTypes = {
  status: PropTypes.bool,
  snackbar: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  closeSnackbar: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { status, snackbar } = state.sign
  return { status, snackbar }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(signActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)