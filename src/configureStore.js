import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state
  }
}

export default function() {
  const store = createStore(todos, ['Use Redux']);
  return store;
}