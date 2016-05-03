import React, { Component } from 'react'
import { Link } from 'react-router'
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

class Li extends Component {
  render() {
    const liStyle = {
      position: 'relative',
      padding: '8px 0 8px 20px'
    }
    const arrowStyle = {
      position: 'absolute',
      top: '8px',
      left: '-6px',
      width: '20px',
      height: '20px'
    }

    return (
      <li style={liStyle}>
        <ArrowRight style={arrowStyle} color="#b6b6b6" />
        {this.props.children}
      </li>
    )
  }
}
class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
        <h3 className="widget-title">最近文章</h3>
        <ul>
          <Li>
            <Link to="">Welcome to here</Link>
            <time className="post-date">September 15, 2014</time>
          </Li>
          <Li>
            <Link to="">centos6.5安装postgresql数据库和pgadmin客户端</Link>
            <time className="post-date">September 15, 2014</time>
          </Li>
          <Li>
            <Link to="">Jon Snow has resurrected</Link>
            <time className="post-date">September 15, 2014</time>
          </Li>
          <Li>
            <Link to="">Winter is coming</Link>
            <time className="post-date">September 15, 2014</time>
          </Li>
        </ul>
      </div>
    )
  }
}
class Tags extends Component {
  render() {
    let basicSize = 10
    let unit = 2
    return (
      <div className="tags">
        <h3 className="widget-title">标签</h3>
        <Link to="" style={{fontSize: `${basicSize + unit * 1}px`}} title="1 topic">website </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 3}px`}} title="3 topic">internet </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 4}px`}} title="4 topic">react </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 7}px`}} title="7 topic">food </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 3}px`}} title="3 topic">sport </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 10}px`}} title="10 topic">koa </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 6}px`}} title="6 topic">photography </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 3}px`}} title="3 topic">music </Link>
        <Link to="" style={{fontSize: `${basicSize + unit * 9}px`}} title="9 topic">coding </Link>
      </div>
    )
  }
}
class Archives extends Component {
  render() {
    return (
      <div className="archives">
        <h3 className="widget-title">归档</h3>
        <Li>
          <Link to="">September 2014</Link>
        </Li>
        <Li>
          <Link to="">August 2014</Link>
        </Li>
        <Li>
          <Link to="">July 2014</Link>
        </Li>
        <Li>
          <Link to="">March 2014</Link>
        </Li>
        <Li>
          <Link to="">February 2014</Link>
        </Li>
        <Li>
          <Link to="">April 2013</Link>
        </Li>
      </div>
    )
  }
}
class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <h3 className="widget-title">分类</h3>
        <Li>
          <Link to="">Coding</Link>
        </Li>
        <Li>
          <Link to="">Photography</Link>
        </Li>
        <Li>
          <Link to="">Social Marketing</Link>
        </Li>
        <Li>
          <Link to="">Web Design</Link>
        </Li>
        <Li>
          <Link to="">WordPress</Link>
        </Li>
      </div>
    )
  }
}

class Aside extends Component {
  render() {
    return (
      <aside>
        <RecentPosts />
        <Tags />
        <Archives />
        <Categories />
      </aside>
    )
  }
}

export default Aside