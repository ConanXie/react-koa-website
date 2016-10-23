import React, { Component } from 'react'

import Aside from './blog/Aside'
import List from './blog/List'

class Blog extends Component {
  render() {
    // console.log(this.props)
    let current = '1'
    const { page } = this.props.params
    if (page) {
      current = page
    }
    return (
      <div className="main">
        <div className="body">
          <section className="left content">
            {/*this.props.children*/}
            <List page={current} />
          </section>
          <Aside />
        </div>
      </div>
    )
  }
}

export default Blog