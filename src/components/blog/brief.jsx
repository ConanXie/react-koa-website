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
        <time style={spanStyle}><ActionWatchLater style={iconStyle} color="#9e9e9e" />September 15,
        2014</time>
        {/*<span className="author" style={spanStyle}><SocialPerson style={iconStyle} color="#9e9e9e" />Xie Jie</span>*/}
        <Link to="">
          <span className="category" style={spanStyle}><FileFolder style={iconStyle} color="#9e9e9e" />website</span>
        </Link>
        <Link to="">
          <span className="comments" style={spanStyle}><EditorModeComment style={iconStyle} color="#9e9e9e" />7 comments</span>
        </Link>
      </div>
    )
  }
}

class Brief extends Component {
  render() {
    return (
      <div className="blog-brief">
          <a href="https://www.google.com.hk">
            <img src="/images/googlelogo_color_272x92dp.png" alt=""/>
          </a>
          <div className="brief-body">
            <h2><Link to="blog/detail/2">Google is a big company</Link></h2>
            <Meta />
            <div className="content">
              <p>Google公司（Google Inc.），是一家美国的跨国科技企业，业务范围涵盖互联网搜索、云计算、广告技术等领域，开发并提供大量基于互联网的产品与服务，其主要利润来自于AdWords等广告服务。
              </p>
            </div>
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