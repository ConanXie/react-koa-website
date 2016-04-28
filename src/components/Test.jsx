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
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, value, getData } = this.props
    return (
      <div>
        Clicked: {counter} times
        {' '}
        <button style={buttonStyle} onClick={increment}>+</button>
        {' '}
        <button style={buttonStyle} onClick={decrement}>-</button>
        {' '}
        <button style={buttonStyle} onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button style={buttonStyle} onClick={() => {incrementAsync()}}>Increment async</button>
        <h1>{value}</h1>
        <button style={buttonStyle} onClick={getData}>获取数据</button>
      </div>
    )
  }
}
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired
}

class Test extends Component {
  render() {
    return (
        <Counter />
    )
  }
}
export default Counter