import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { actions, todoCountSelector } from './reducers/todo';
import { App } from './App';


const store = configureStore();

console.log(todoCountSelector(store.getState()));

store.dispatch(actions.addTodo({
  id: 0,
  title: 'Купить хлеба',
  description: 'По пути домой',
}));

console.log(todoCountSelector(store.getState()));

store.dispatch(actions.addTodo({
  id: 1,
  title: 'Задеплоить сервис',
}));

console.log(todoCountSelector(store.getState()));


ReactDOM.render(<App />, document.getElementById('root'));





































store.dispatch({
  type: 'ADD_TODO',
  text: 'ololo',
});


