import createHistory from 'history/createBrowserHistory';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import logger from 'redux-logger';
import {
  userReducer
} from './reducers/userReducer';
import createSagaMiddleware from 'redux-saga';
import {
  loginUserSaga
} from './sagas/loginSaga';
import {
  sagaMonitor
} from './sagas/sagaMonitor';

export const history = createHistory();
const routerMiddle = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware({
  // sagaMonitor: {
  //   effectResolved: (effectId, result) => {
  //     if (result.type === types.LOGIN_USER_RESOLVED) {
  //       store.dispatch(push())
  //     }
  //   }
  // }
  sagaMonitor,
});

const reducer = combineReducers({
  user: userReducer,
  route: routerReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(routerMiddle, logger, sagaMiddleware),
);

sagaMiddleware.run(loginUserSaga);
