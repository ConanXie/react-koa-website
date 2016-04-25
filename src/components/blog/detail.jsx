import React, { Component } from 'react'

import Aside from './blog/aside'
import Article from './blog/article'

class BlogDetail extends Component {
  componentDidMount() {
    console.log(123)
  }
  render() {
    return (
      <div className="main">
        <div className="body">
          <section className="left content">
            <Article />
          </section>
          <Aside />
        </div>
      </div>
    )
  }
}

export default BlogDetail