/*import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Test from '../components/Test'
import * as CounterActions from '../actions/counter'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  const {counter, value, results} = state
  return {
    counter,
    value,
    results
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)*/