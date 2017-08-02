import {
  store
} from '../index';
import {
  push
} from 'react-router-redux';
import * as types from '../actions/types';

export const sagaMonitor = {
  effectResolved: (effectId, result) => {
    if (result.type === types.LOGIN_USER_RESOLVED) {
      store.dispatch(push(`/dashboard`));
    } else if (result.type === types.SIGNUP_USER_RESOLVED) {
      store.dispatch(push(`/dashboard`));
    }
  }
}
