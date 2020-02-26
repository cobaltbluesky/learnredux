import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state_value={
  counter:0,
  message:"COUNTER"
}

function counter(state=state_value,action){
  switch (action.type) {
    case 'INCREMENT':
    return{
      counter:state.counter+=1,
      message:"INCREMENT"
    };
    case 'DECREMENT':
    return{
      counter:state.counter-=1,
      message:"DECREMENT"
    };
    default:
    return state;
  }
}

let store=createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
