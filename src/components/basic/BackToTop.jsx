import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'


class BackToTop extends Component {
  handleClick() {
    $('body').animate({scrollTop: 0}, 500)
  }
  render() {
    return (
      <div className="back-to-top" onClick={this.handleClick} title="回到顶部">
        <FloatingActionButton secondary={true}>
          <ArrowUp />
        </FloatingActionButton>
      </div>
    )
  }
}

export default BackToTop