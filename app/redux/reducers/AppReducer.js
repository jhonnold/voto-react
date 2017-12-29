import types from '../actions/types';

const initialState = {
  drawerOpen: false,
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.toggleDrawer: {
      return { ...state, drawerOpen: !state.drawerOpen };
    }
    default : {
      return state;
    }
  }
};
