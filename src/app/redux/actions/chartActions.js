import * as types from "./types";

const addResponse = payload => ({
  type: types.ADD_RESPONSE,
  payload,
});

export default addResponse;
