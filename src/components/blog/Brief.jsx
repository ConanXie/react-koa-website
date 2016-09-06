import React, { Component } from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import ActionWatchLater from 'material-ui/svg-icons/action/watch-later'
import SocialPerson from 'material-ui/svg-icons/social/person'
import FileFolder from 'material-ui/svg-icons/file/folder'
import EditorModeComment from 'material-ui/svg-icons/editor/mode-comment'


export class Meta extends Component {
  render() {
    const spanStyle = {
      display: 'inline-block',
      color: '#9e9e9e',
      marginRight: '16px'
    }
    const iconStyle = {
      width: '14px',
      height: '14px',
      margin: '-2px 5px 0 0',
      verticalAlign: 'middle'
    }
    return (
      <div className="meta">
        <time style={spanStyle}><ActionWatchLater style={iconStyle} color="#9e9e9e" />2016-05-05</time>
        {/*<span className="author" style={spanStyle}><SocialPerson style={iconStyle} color="#9e9e9e" />Xie Jie</span>*/}
        <Link to="">
          <span className="category" style={spanStyle}><FileFolder style={iconStyle} color="#9e9e9e" />website</span>
        </Link>
        <Link to="">
          <span className="comments" style={spanStyle}><EditorModeComment style={iconStyle} color="#9e9e9e" />7 评论</span>
        </Link>
      </div>
    )
  }
}

class Brief extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="blog-brief">
          <a href="https://www.google.com">
            <img src="/images/googlelogo_color_272x92dp.png" alt="" />
          </a>
          <div className="brief-body">
            <h2><Link to="blog/detail/2">{data.title}</Link></h2>
            <Meta />
            <div className="content" dangerouslySetInnerHTML={{__html: data.body}}></div>
            <Link to="blog/detail/2">
              <RaisedButton
                label="更多"
              />
            </Link>
          </div>
      </div>
    )
  }
}

export default Brief