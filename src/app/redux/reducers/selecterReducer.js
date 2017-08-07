import * as types from '../actions/types';

const initialState = {
  questions: [],
  pushingImageCount: 0,
};

export const selecterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newList, pushingCount;

  switch (type) {
    case types.SESSION_QUESTIONS_RESOLVED:
      const frontEndReady = payload.data.map((question, index) => {
        return {
          ...question,
          id: index,
        }
      });

      return {...state, questions: frontEndReady};
      //return {...state, questions: fakeImages};

    case types.SESSION_QUESTIONS_REJECTED:
      return state;
      //return {...state, questions: fakeImages, title: 'NO TITLE', className: 'NO CLASS'};

    case types.QUESTION_CARD_MOVED:
      newList = state.questions.slice();
      newList.splice(payload.index, 1);
      newList.splice(payload.atIndex, 0, payload.question);
      return {...state, questions: newList};

    case types.QUESTION_CARD_ADDED:
      newList = state.questions.slice();
      newList.push(payload);
      return {...state, questions: newList};

    case types.SESSION_SELECTED:
      return {...payload, questions: []};

    case 'QUESTION_ADDED':
      newList = state.questions.slice();
      newList.push(payload);
      return {...state, questions: newList};

    case types.QUESTION_URL_RESOLVED:
      newList = state.questions.slice();
      const index = newList.findIndex(q => q.imgFileName === payload.imgFileName);
      console.log(index);
      newList[index].url = payload.url;
      return {...state, questions: newList };

    case types.IS_PUSHING_NEW_IMAGE:
      pushingCount = (state.pushingImageCount ? state.pushingImageCount : 0) + 1;
      return {...state, pushingImageCount: pushingCount};

    case types.NEW_IMAGE_RESOLVED:
      pushingCount = state.pushingImageCount - 1;
      newList = state.questions.slice();
      newList.push({
        ...payload.data,
        id: newList.length,
      });
      return {...state, pushingImageCount: pushingCount, questions: newList};
    default:
      return state;

  }
};