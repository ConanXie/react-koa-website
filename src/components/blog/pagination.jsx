import React, { Component } from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before'
import NavigateNext from 'material-ui/svg-icons/image/navigate-next'
import { lightBlue500 } from 'material-ui/styles/colors'

const spanStyle = {
  display: 'inline-block',
  width: '56px',
  height: '56px',
  marginRight: '2px',
  fontSize: '18px',
  color: '#000',
  lineHeight: '56px',
  textAlign: 'center',
  borderRadius: '50%'
}
const currentStyle = {
  display: 'inline-block',
  width: '56px',
  height: '56px',
  marginRight: '2px',
  fontSize: '18px',
  color: '#fff',
  lineHeight: '56px',
  textAlign: 'center',
  backgroundColor: lightBlue500,
  borderRadius: '50%'
}
const flatButtonStyle = {
  width: '56px',
  minWidth: '56px',
  height: '56px',
  margin: '0 2px',
  borderRadius: '50%',
  fontSize: '18px'
}
const navigateStyle = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  left: '50%',
  top: '50%',
  WebkitTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  opacity: 0.75
}

class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <span style={currentStyle}>1</span>
        <Link to="">
          <FlatButton
            label="2"
            style={flatButtonStyle}
          />
        </Link>
          <FlatButton
            label="3"
            style={flatButtonStyle}
          />
          <FlatButton
            label="4"
            style={flatButtonStyle}
          />
          <span style={spanStyle}>...</span>
          <FlatButton
            label="100"
            style={flatButtonStyle}
          />
          <FlatButton
            label={<NavigateNext style={navigateStyle} />}
            style={flatButtonStyle}
          />
          <FlatButton
            label={<NavigateBefore style={navigateStyle} />}
            style={flatButtonStyle}
          />
      </div>
    )
  }
}

export default Pagination