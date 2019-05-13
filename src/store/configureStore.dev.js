import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';


export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(createLogger()),
      DevTools.instrument(),
    ),
  );

  return store;
}
