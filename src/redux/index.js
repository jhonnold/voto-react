import { keaReducer } from 'kea';
import { keaSaga } from 'kea-saga';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default () => new Promise((resolve, reject) => {
  try {
    const reducers = combineReducers({
      kea: keaReducer('kea'),
      scenes: keaReducer('scenes'),
      router: routerReducer,
    });

    const sagaMiddleware = createSagaMiddleware();
    const finalCreateStore = compose(
      autoRehydrate(),
      applyMiddleware(sagaMiddleware, routerMiddleware(history), logger),
    )(createStore);

    const store = finalCreateStore(reducers);
    sagaMiddleware.run(keaSaga);

    persistStore(
      store,
      {},
      () => resolve(store),
    );
  } catch (err) {
    reject(err);
  }
});
