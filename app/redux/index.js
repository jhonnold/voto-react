import { createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

const config = {
  key: 'root',
  storage,
  debug: true,
};

const reducer = persistCombineReducers(config, {
  routerReducer,
});

export const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(routerMiddlewareWithHistory));
  const persistor = persistStore(store);

  return { persistor, store };
};
