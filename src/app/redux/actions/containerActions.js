import * as types from './types';

const resize = width => (
  {
    type: types.CONTAINER_RESIZE,
    payload: width,
  }
);

export default resize;
