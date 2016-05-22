import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before'
import NavigateNext from 'material-ui/svg-icons/image/navigate-next'
import { lightBlue500 } from 'material-ui/styles/colors'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as BlogActions from '../../actions/blog'

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
  static propTypes = {
    pagination: PropTypes.object.isRequired,
    getPagination: PropTypes.func.isRequired
  }
  paginationClick = (page) => {
    const { getPagination } = this.props
    getPagination(page)
  }
  render() {
    const { pagination, getPagination } = this.props
    let PreviousComponent, CurrentComponent, NextComponent
    console.log(pagination)
    if (pagination.previous) {
      PreviousComponent = (
        <Link
          to={`/blog/page/${pagination.previous}`}
          className="page-before-btn"
          onClick={e => this.paginationClick(pagination.previous)}
        >
          <FlatButton
            label={<NavigateBefore style={navigateStyle} />}
            style={flatButtonStyle}
          />
        </Link>
      )
    } else {
      PreviousComponent = (
        <FlatButton
          label={<NavigateBefore style={navigateStyle} />}
          className="page-before-btn page-disable-btn"
          style={flatButtonStyle}
          disabled={true}
        />
      )
    }
    if (pagination.next) {
      NextComponent = (
        <Link to={`/blog/page/${pagination.next}`} className="page-next-btn" onClick={e => getPagination(pagination.next)}>
          <FlatButton
            label={<NavigateNext style={navigateStyle} />}
            style={flatButtonStyle}
          />
        </Link>
      )
    } else {
      NextComponent = (
        <FlatButton
          label={<NavigateNext style={navigateStyle} />}
          className="page-next-btn page-disable-btn"
          style={flatButtonStyle}
          disabled={true}
        />
      )
    }
    return (
      <div className="pagination">
        {/*<Link to="" className="page-before-btn">
          <FlatButton
            label={<NavigateBefore style={navigateStyle} />}
            style={flatButtonStyle}
          />
        </Link>
        <span style={currentStyle} className="page-current-btn" onClick={e => {getPagination()}}>1</span>
        <span style={currentStyle} className="page-current-btn" onClick={e => {getPagination(2)}}>2</span>
        <Link to="" className="page-center-btn">
          <FlatButton label="2" style={flatButtonStyle} />
        </Link>
        <Link to="" className="page-center-btn">
          <FlatButton label="3" style={flatButtonStyle} />
        </Link>
        <Link to="" className="page-center-btn">
          <FlatButton label="4" style={flatButtonStyle} />
        </Link>
        <span style={spanStyle} className="page-center-btn">...</span>
        <Link to="" className="page-center-btn">
          <FlatButton label="100" style={flatButtonStyle} />
        </Link>
        <Link to="" className="page-next-btn">
          <FlatButton
            label={<NavigateNext style={navigateStyle} />}
            style={flatButtonStyle}
          />
        </Link>*/}
        {PreviousComponent}
        <span style={currentStyle} className="page-current-btn">{pagination.current}</span>
        {NextComponent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { pagination } = state.blog
  return { pagination }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(BlogActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)