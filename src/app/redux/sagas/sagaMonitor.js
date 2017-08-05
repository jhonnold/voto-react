import {
  store
} from '../index';
import {
  push
} from 'react-router-redux';
import {
  getSessions,
  setSelectedSession,
} from '../actions/sessionsActions.js';
import * as types from '../actions/types';

export const sagaMonitor = {
  effectResolved: (effectId, result) => {
    if (result.type === types.LOGIN_USER_RESOLVED) {
      store.dispatch(push(`/dashboard`));
    } else if (result.type === types.SIGNUP_USER_RESOLVED) {
      store.dispatch(push(`/dashboard`));
    } else if (result.type === types.NEW_SESSION_RESOLVED) {
      store.dispatch(
        setSelectedSession(result.payload.data)
      );
      store.dispatch(
        push(`/sessions/${result.payload.data.sessionId}/edit`)
      );
    }
  }
}
