import { push, goBack } from "react-router-redux";
import { store } from "../index";
import { setUser } from "../actions/userActions";
import { setSelectedSession } from "../actions/sessionsActions";
import { getQuestionUrl } from "../actions/questionActions";
import * as types from "../actions/types";

const sagaMonitor = {
  effectRejected: (effectId, error) => {
    if (error.response.status === 401) {
      // We have been inactive too long and are kicked out
      store.dispatch(setUser({ loggedIn: false }));
      store.dispatch(push("/login"));
    } else {
      store.dispatch({ type: types.ERROR, payload: error });
    }
  },
  effectResolved: (effectId, result) => {
    switch (result.type) {
      case types.LOGIN_USER_RESOLVED: {
        store.dispatch(setUser(result.payload.data));
        if (result.payload.data.type === "T") {
          store.dispatch(push("/dashboard"));
        } else {
          store.dispatch(push("/student/classes"));
        }
        return;
      }
      case types.SIGNUP_USER_RESOLVED: {
        store.dispatch(push("/dashboard"));
        return;
      }
      case types.NEW_SESSION_RESOLVED: {
        store.dispatch(setSelectedSession(result.payload.data[0]));
        store.dispatch(push(`/sessions/${result.payload.data[0].sessionId}/edit`));
        return;
      }
      case types.SESSION_QUESTIONS_RESOLVED: {
        result.payload.data.questions.map((q) => {
          store.dispatch(getQuestionUrl(q.imgFileName));
          return 0;
        });
        return;
      }
      case "UPDATE_QUESTIONS_RESOLVED": {
        store.dispatch(goBack());
        return;
      }
      case types.LOGOUT_RESOLVED: {
        store.dispatch(setUser({ loggedIn: false }));
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
