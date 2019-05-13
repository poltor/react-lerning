import { combineReducers } from 'redux';

import todo from './todo';
import cat from './cat';

export default combineReducers({
  todo,
  cat,
})