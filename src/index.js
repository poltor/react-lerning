import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { actions } from './reducers/todo';
import Root from './containers/Root';


const store = configureStore();

store.dispatch(actions.addTodo({
  title: 'Купить хлеба',
  description: 'По пути домой',
}));

store.dispatch(actions.addTodo({
  title: 'Задеплоить сервис',
}));


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);





































store.dispatch({
  type: 'ADD_TODO',
  text: 'ololo',
});


