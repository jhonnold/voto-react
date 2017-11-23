import { createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import { UserReducer } from './reducers';

export const history = createHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

const config = {
  key: 'root',
  storage,
  debug: true,
};

const reducer = persistCombineReducers(config, {
  routerReducer,
  user: UserReducer,
});

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(routerMiddlewareWithHistory, sagaMiddleware),
  );
  const persistor = persistStore(store);

  return { persistor, store: { ...store, runSaga: sagaMiddleware.run } };
};
