import React, { Component } from 'react'

import Brief from './brief'
import Pagination from './pagination'

class List extends Component {
  render() {
    return (
      <div>
        <Brief />
        <Brief />
        <Brief />
        <Brief />
        <Brief />
        <Pagination />
      </div>
    )
  }
}

export default List