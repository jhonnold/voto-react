import * as types from './types';

export const resize = width => (
  {
    type: types.CONTAINER_RESIZE,
    payload: width,
  }
);
