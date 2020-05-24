import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import App from './components/App'


const store = createStore(reducer);

ReactDom.render(<Provider store={store}>
  <App /></Provider>, 
  document.getElementById('root'))

// const { dispatch } = store;

// // // const bindActionCreator = (creator, dispatch) => (...args) => dispatch(creator(...args))

// // // const incDispatch = bindActionCreator(inc, dispatch);
// // // const decDispatch = bindActionCreator(dec, dispatch);
// // // const rndDispatch = bindActionCreator(rnd, dispatch);

// // const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
// //   incDispatch: inc,
// //   decDispatch: dec,
// //   rndDispatch:rnd
// // }, dispatch)
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// const update = () => {
//   ReactDom.render(<Component
//     counter={store.getState()}
//     inc={ inc }
//     dec={ dec }
//     rnd={ () => {
//       const random = Math.floor(Math.random() * 10);
//       rnd(random);
//     }} />,
//     document.getElementById('root'));
// };



// update();
// store.subscribe(update);

