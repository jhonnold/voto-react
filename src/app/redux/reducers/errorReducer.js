import { REHYDRATE } from "redux-persist/constants";
import * as types from "../actions/types";

const errorReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ERROR:
      return {...payload.response.data.error, isShowing: true};
    case types.HIDE_ERROR:
      return {...state, isShowing: false};
    case REHYDRATE:
      return {};
    default:
      return state;
  }
};

export default errorReducer;
