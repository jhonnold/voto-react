import { createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { UserReducer } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';

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
  form: formReducer,
});

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = null;

  if (isProduction) {
    middleware = applyMiddleware(routerMiddlewareWithHistory);
  } else {
    middleware = applyMiddleware(routerMiddlewareWithHistory, sagaMiddleware, logger);
  }

  const store = createStore(
    reducer,
    middleware,
  );
  const persistor = persistStore(store);

  return { persistor, store: { ...store, runSaga: sagaMiddleware.run } };
};
