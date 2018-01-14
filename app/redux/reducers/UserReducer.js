import types from '../actions/types';

const initialState = {
  creationDate: '',
  email: '',
  firstName: '',
  lastName: '',
  type: '',
  userId: '',
  userName: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.loginResolved: {
      return payload.user;
    }
    default: {
      return state;
    }
  }
};
