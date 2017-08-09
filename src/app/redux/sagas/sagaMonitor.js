import {
  store
} from '../index';
import {
  push,
  goBack
} from 'react-router-redux';
import {
  setSelectedSession,
} from '../actions/sessionsActions.js';
import {
  getQuestionUrl
} from '../actions/questionActions';
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
    } else if (result.type === types.SUBMIT_SESSION_RESOLVED) {
      //store.dispatch(goBack());
    } else if (result.type === types.SESSION_QUESTIONS_RESOLVED) {
      const { data } = result.payload;
      data.map((question) => {
        store.dispatch(getQuestionUrl(question.imgFileName));
      })
    }
  }
};
