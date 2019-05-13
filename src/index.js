import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { App } from './App';


const store = configureStore();

console.log(store);


ReactDOM.render(<App />, document.getElementById('root'));


