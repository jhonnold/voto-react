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
import {
  sessionsReducer
} from './reducers/sessionsReducer';
import {
  questionsReducer
} from './reducers/questionsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import {
sagaMonitor
} from './sagas/sagaMonitor';

export const history = createHistory();
const routerMiddle = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const reducer = combineReducers({
  user: userReducer,
  route: routerReducer,
  sessions: sessionsReducer,
  questions: questionsReducer
});

export const store = createStore(
  reducer,
  applyMiddleware(routerMiddle, logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
