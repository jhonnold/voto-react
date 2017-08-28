import * as types from "./types";

export const activate = () => ({
  type: types.ACTIVATE,
});

export const deactivate = () => ({
  type: types.DEACTIVATE,
});

export const resetActive = () => ({
  type: types.RESET_ACTIVE,
});

export const setActiveIndex = index => ({
  type: types.SET_ACTIVE_INDEX,
  payload: index,
});
