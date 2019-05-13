import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';


export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
  );

  return store;
}
