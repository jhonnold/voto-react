import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from "redux-form";
import userReducer from "./reducers/userReducer";
import sessionsReducer from "./reducers/sessionsReducer";
import questionsReducer from "./reducers/questionsReducer";
import containerReducer from "./reducers/containerReducer";
import selecterReducer from "./reducers/selecterReducer";
import rootSaga from "./sagas/index";
import sagaMonitor from "./sagas/sagaMonitor";

export const history = createHistory();
const routerMiddle = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const reducer = combineReducers({
  user: userReducer,
  route: routerReducer,
  sessions: sessionsReducer,
  questions: questionsReducer,
  selectedSession: selecterReducer,
  form: formReducer,
  container: containerReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(routerMiddle, logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
