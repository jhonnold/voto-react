// import * as types from '../actions/types';

const questionsReducer = (state = [], action) => {
  const { type } = action;
  // let newState = state.slice();

  switch (type) {
    // case types.SESSION_QUESTIONS_RESOLVED:
    //   //return action.payload;
    //   return fakeImages;
    // case types.SESSION_QUESTIONS_REJECTED:
    //   //return newState;
    //   return fakeImages;
    // case types.QUESTION_CARD_MOVED:
    //   newState.splice(payload.index, 1);
    //   newState.splice(payload.atIndex, 0, payload.question);
    //   return newState;
    // case types.QUESTION_CARD_ADDED:
    //   newState.push(payload);
    //   return newState;
    default:
      return state;
  }
};

export default questionsReducer;
