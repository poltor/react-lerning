import { createStore } from 'redux'
import reducer from './reducers';


export default function() {
  const store = createStore(reducer, {todo: ['Learn redux']});
  return store;
}