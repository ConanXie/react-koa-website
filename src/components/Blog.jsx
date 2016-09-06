import React, { Component } from 'react'

import Aside from './blog/aside'

class Blog extends Component {
  render() {
    return (
      <div className="main">
        <div className="body">
          <section className="left content">
            {this.props.children}
          </section>
          <Aside />
        </div>
      </div>
    )
  }
}

export default Blog