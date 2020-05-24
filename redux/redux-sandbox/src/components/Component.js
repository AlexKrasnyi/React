import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Component = ({ counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
      <h2>{counter}</h2>
      <button onClick={inc} className="bth btn-danger btn-lg">inc</button>
      <button onClick={dec} className="bth btn-danger btn-lg">dec</button>
      <button onClick={rnd} className="bth btn-primary btn-lg">RND</button>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {counter: state};
};
// const mapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
//   return {
//     inc,
//     dec,
//     rnd
//     // rnd: () => {
//     //   const value = Math.floor(Math.random() * 10);
//     //   rnd(value)
//     //  }
    
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Component)
export default connect(mapStateToProps, actions)(Component)
