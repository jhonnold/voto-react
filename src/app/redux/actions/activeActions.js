import * as types from "./types";

export const resetActive = () => ({
  type: types.RESET_ACTIVE,
});

export const setActiveIndex = index => ({
  type: types.SET_ACTIVE_INDEX,
  payload: index,
});
