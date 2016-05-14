import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/counter'

const buttonStyle = {
  background: '#343434',
  color: '#fff',
  padding: '10px 20px',
  cursor: 'pointer',
  border: 'none',
  outline: 'none'
}
class Counter extends Component {
  handleClick(e) {
    const node = this.refs.button
    console.log(node)
    this.props.getData()
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, count, value, getData, results } = this.props
    return (
      <div>
        Clicked: {count} times
        {' '}
        <button style={buttonStyle} onClick={increment}>+</button>
        {' '}
        <button style={buttonStyle} onClick={decrement}>-</button>
        {' '}
        <button style={buttonStyle} onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button style={buttonStyle} onClick={e => incrementAsync() }>Increment async</button>
        <h1>{value}</h1>
        <button style={buttonStyle} onClick={e => this.handleClick(e)} ref="button">获取数据</button>
        {/*<ul>
          {results.map((result) => {
            return (
              <li key={result.date}>
                <h3>{result.title}</h3>
                <p>{result.date}</p>
                <div>{result.body}</div>
              </li>
            )
          })}
        </ul>*/}
      </div>
    )
  }
}
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  const { count, value, results } = state.counter
  return {
    count,
    value,
    results
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)