import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
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

const colorsObject = {
  title: (action) => {
    if (action.type.indexOf("_REQUESTED") >= 0) {
      return "blue";
    } else if (action.type.indexOf("_RESOLVED") >= 0) {
      return "green";
    } else if (action.type.indexOf("_REJECTED") >= 0) {
      return "red";
    }
    return "black";
  },
  prevState: () => "#9E9E9E",
  action: () => "#03A9F4",
  nextState: () => "#4CAF50",
  error: () => "#F20404",
};

const logger = createLogger({
  collapsed: (_, action) => action.type.indexOf("_RESOLVED") === -1,
  colors: colorsObject,
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
