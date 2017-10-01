import { keaReducer } from 'kea';
import { keaSaga } from 'kea-saga';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default () => {
  const reducers = combineReducers({
    kea: keaReducer('kea'),
    scenes: keaReducer('scenes'),
    router: routerReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history), logger),
  )(createStore);

  const store = finalCreateStore(reducers);

  sagaMiddleware.run(keaSaga);

  return store;
};
