import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { App } from './App';


const store = configureStore();

console.log(store.getState())

// console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));





































store.dispatch({
  type: 'ADD_TODO',
  text: 'ololo',
});


