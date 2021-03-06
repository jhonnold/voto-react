import { take, fork, cancel, cancelled, put, call } from 'redux-saga/effects';
import api from '../../shared/api';
import types from '../actions/types';
import { history } from '../';

function* authorize(params) {
  try {
    const response = yield call(api.loginUser, params);
    yield put({ type: types.loginResolved, payload: response.data });
  } catch (err) {
    yield put({ type: types.loginRejected, payload: err });
  } finally {
    if (yield cancelled()) {
      // TODO
    }
  }
}

export function* loginFlow() {
  while (true) {
    const { payload } = yield take(types.loginRequested);
    const task = yield fork(authorize, payload);
    const action = yield take([types.loginResolved, types.loginRejected, types.logout]);

    if (action.type === types.logout) {
      // Enter here if we're logging out
      yield cancel(task);
    } else if (action.type === types.loginResolved) {
      api.instance.defaults.headers.common.Authorization = action.payload.token;
      history.push(`/${action.payload.user.type}/home`);

      // wait to logout now that we successfully logged in
      yield take(types.logout);
    } else {
      // TODO
    }

    api.instance.defaults.headers.common.Authorization = '';
    history.push('/');
  }
}

function* signup(params) {
  try {
    const response = yield call(api.signupUser, params);
    yield put({ type: types.signupResolved, payload: response.data });
  } catch (err) {
    yield put({ type: types.signupRejected, payload: err });
  } finally {
    if (yield cancelled()) {
      // TODO
    }
  }
}

export function* signupFlow() {
  while (true) {
    const { payload } = yield take(types.signupRequested);
    const task = yield fork(signup, payload);
    const action = yield take([types.signupResolved, types.signupRejected, types.logout]);

    if (action.type === types.logout) {
      yield cancel(task);
    } else if (action.type === types.signupResolved) {
      history.push(`/${action.payload.type.toLowerCase()}/home`);
      // TODO set user in user reducer
      // wait to logout now that we successfully logged in
      yield take(types.logout);
    } else {
      // TODO
    }

    api.instance.defaults.headers.common.Authorization = '';
    history.push('/');
  }
}
