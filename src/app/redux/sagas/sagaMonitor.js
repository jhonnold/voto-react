import { push } from "react-router-redux";
import { store } from "../index";
import { setLoginState } from "../actions/userActions";
import { setSelectedSession } from "../actions/sessionsActions";
import { getQuestionUrl } from "../actions/questionActions";
import * as types from "../actions/types";

const sagaMonitor = {
  effectResolved: (effectId, result) => {
    switch (result.type) {
      case types.LOGIN_USER_RESOLVED: {
        store.dispatch(setLoginState(true));
        store.dispatch(push("/dashboard"));
        return;
      }
      case types.SIGNUP_USER_RESOLVED: {
        store.dispatch(push("/dashboard"));
        return;
      }
      case types.NEW_SESSION_RESOLVED: {
        store.dispatch(setSelectedSession(result.payload.data));
        store.dispatch(push(`/sessions/${result.payload.data.sessionId}/edit`));
        return;
      }
      case types.SESSION_QUESTIONS_RESOLVED: {
        result.payload.data.map((q) => {
          store.dispatch(getQuestionUrl(q.imgFileName));
          return 0;
        });
        return;
      }
      case types.LOGOUT_RESOLVED: {
        store.dispatch(setLoginState(false));
        store.dispatch(push("/login"));
        break;
      }
      default: {
        break;
      }
    }
  },
};

export default sagaMonitor;
