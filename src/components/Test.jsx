import React, { Component, PropTypes } from 'react'
const buttonStyle = {
  background: '#343434',
  color: '#fff',
  padding: '10px 20px',
  cursor: 'pointer',
  border: 'none',
  outline: 'none'
}
class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button style={buttonStyle} onClick={increment}>+</button>
        {' '}
        <button style={buttonStyle} onClick={decrement}>-</button>
        {' '}
        <button style={buttonStyle} onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button style={buttonStyle} onClick={() => {incrementAsync()}}>Increment async</button>
      </p>
    )
  }
}
/*Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}*/

class Todo extends Component {
  render() {
    const { item, addItem } = this.props
    return (
      <div>
        <div className="box">
          <h3>todo{item}</h3>
          <p></p>
        </div>
      </div>
    )
  }
}
class Test extends Component {
  render() {
    return (
        <Counter />
    )
  }
}
export default Counter