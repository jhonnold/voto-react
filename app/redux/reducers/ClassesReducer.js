import types from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.classesResolved: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
