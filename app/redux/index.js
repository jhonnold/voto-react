import { createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer, loadingBarMiddleware } from 'react-redux-loading-bar';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { UserReducer, AppReducer } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';

export const history = createHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

const colorsObject = {
  title: (action) => {
    if (action.type.indexOf('_REQUESTED') >= 0) {
      return 'blue';
    } else if (action.type.indexOf('_RESOLVED') >= 0) {
      return 'green';
    } else if (action.type.indexOf('_REJECTED') >= 0) {
      return 'red';
    }
    return 'black';
  },
  prevState: () => '#9E9E9E',
  action: () => '#03A9F4',
  nextState: () => '#4CAF50',
  error: () => '#F20404',
};

const logger = createLogger({
  predicate: (_, action) => !/@@/.test(action.type),
  collapsed: (_, action) => {
    if (action.type) {
      return action.type.indexOf('_RESOLVED') === -1;
    }
    return true;
  },
  colors: colorsObject,
});

const config = {
  key: 'root',
  storage,
  debug: true,
  whitelist: 'user',
};

const reducer = persistCombineReducers(config, {
  routerReducer,
  user: UserReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,
  app: AppReducer,
});

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = null;

  if (isProduction) {
    middleware = applyMiddleware(
      routerMiddlewareWithHistory,
      sagaMiddleware,
      loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUESTED', 'RESOLVED', 'REJECTED'],
      }),
    );
  } else {
    middleware = applyMiddleware(
      routerMiddlewareWithHistory,
      sagaMiddleware,
      loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUESTED', 'RESOLVED', 'REJECTED'],
      }),
      logger,
    );
  }

  const store = createStore(reducer, middleware);

  const persistor = persistStore(store);

  return { persistor, store: { ...store, runSaga: sagaMiddleware.run } };
};
