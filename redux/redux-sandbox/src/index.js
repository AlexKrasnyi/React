import React from 'react'
import ReactDom from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
import  * as actions  from './actions'
import Component from './component'

const store = createStore(reducer);
const { dispatch } = store;

// // const bindActionCreator = (creator, dispatch) => (...args) => dispatch(creator(...args))

// // const incDispatch = bindActionCreator(inc, dispatch);
// // const decDispatch = bindActionCreator(dec, dispatch);
// // const rndDispatch = bindActionCreator(rnd, dispatch);

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch:rnd
// }, dispatch)
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDom.render(<Component
    counter={store.getState()}
    inc={ inc }
    dec={ dec }
    rnd={ () => {
      const random = Math.floor(Math.random() * 10);
      rnd(random);
    }} />,
    document.getElementById('root'));
};



update();
store.subscribe(update);

