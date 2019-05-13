import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { actions } from './reducers/todo';
import App from './App';


const store = configureStore();

store.dispatch(actions.addTodo({
  title: 'Купить хлеба',
  description: 'По пути домой',
}));

store.dispatch(actions.addTodo({
  title: 'Задеплоить сервис',
}));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);





































store.dispatch({
  type: 'ADD_TODO',
  text: 'ololo',
});


