import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/counter'

import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import { lightBlue500 } from 'material-ui/styles/colors'

const style = {
  margin: '20px 12px 10px 0'
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
      <div className="main">
        <div className="body">
          <div>
            <p>Clicked: {count} times</p>
            {' '}
            <RaisedButton style={style} icon={<ContentAdd />} onTouchTap={increment} />
            {' '}
            <RaisedButton style={style} icon={<ContentRemove />} onTouchTap={decrement} />
            {' '}
            <RaisedButton style={style} label="Increment if odd" onTouchTap={incrementIfOdd} />
            {' '}
            <RaisedButton style={style} label="Increment async" onTouchTap={e => incrementAsync()} />
            <h1>{value}</h1>
            <RaisedButton style={style} secondary={true} label="获取数据" onTouchTap={e => this.handleClick(e)} ref="button" />
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
            <Link to="/write">
              <RaisedButton style={style} label="write" />
            </Link>
          </div>
        </div>
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