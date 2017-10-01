import { keaReducer } from 'kea';
import { keaSaga } from 'kea-saga';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default () => {
  const reducers = combineReducers({
    kea: keaReducer('kea'),
    scenes: keaReducer('scenes'),
  });

  const sagaMiddleware = createSagaMiddleware();
  const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware),
  )(createStore);

  const store = finalCreateStore(reducers);

  sagaMiddleware.run(keaSaga);

  return store;
};
