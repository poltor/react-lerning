import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';


export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        createLogger(),
        thunkMiddleware
      ),
      DevTools.instrument(),
    ),
  );

  return store;
}
