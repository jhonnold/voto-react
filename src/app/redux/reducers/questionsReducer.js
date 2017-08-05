import * as types from '../actions/types';

export const questionsReducer = (state = [], action) => {
  const { type, payload } = action;
  let newState = state.slice();

  switch (type) {
    case types.SESSION_QUESTIONS_RESOLVED:
      //return action.payload;
      return [1, 2, 3, 4, 5, 6, 7];
    case types.SESSION_QUESTIONS_REJECTED:
      //return newState;
      return [
        {
          id: 1,
          text: 'Hello',
        },
        {
          id: 2,
          text: 'ASDF',
        },
        {
          id: 3,
          text: 'goof',
        },
      ]
    case types.QUESTION_CARD_MOVED:
      newState.splice(payload.index, 1);
      newState.splice(payload.atIndex, 0, payload.question);
      return newState;
    default:
      return state;
  }
};