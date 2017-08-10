import * as types from "../actions/types";

const initialState = {
  questions: [],
  pushingImageCount: 0,
};

const selecterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newList;
  let pushingCount;
  let index;

  switch (type) {
    case types.SESSION_QUESTIONS_RESOLVED: {
      const frontEndReady = payload.data.map((question, i) => ({
        ...question,
        id: i,
      }));

      return { ...state, questions: frontEndReady };
      // return {...state, questions: fakeImages};
    }
    case types.SESSION_QUESTIONS_REJECTED: {
      return state;
    }
    case types.QUESTION_CARD_MOVED: {
      newList = state.questions.slice();
      newList.splice(payload.index, 1);
      newList.splice(payload.atIndex, 0, payload.question);
      return { ...state, questions: newList };
    }
    case types.QUESTION_CARD_ADDED: {
      newList = state.questions.slice();
      newList.push(payload);
      return { ...state, questions: newList };
    }
    case types.SESSION_SELECTED: {
      return { ...payload, questions: [] };
    }
    case types.QUESTION_URL_RESOLVED: {
      newList = state.questions.slice();
      index = newList.findIndex(q => q.imgFileName === payload.imgFileName);
      newList[index].url = payload.url;
      return { ...state, questions: newList };
    }
    case types.IS_PUSHING_NEW_IMAGE: {
      pushingCount =
        (state.pushingImageCount ? state.pushingImageCount : 0) + 1;
      return { ...state, pushingImageCount: pushingCount };
    }
    case types.NEW_IMAGE_RESOLVED: {
      pushingCount = state.pushingImageCount - 1;
      newList = state.questions.slice();
      newList.push({
        ...payload.data,
        id: newList.length,
      });
      return { ...state, pushingImageCount: pushingCount, questions: newList };
    }
    case types.DELETE_QUESTION_RESOLVED: {
      newList = state.questions.filter(question => question.id !== payload.id);
      newList = newList.map((question, i) => ({
        ...question,
        id: i,
      }));
      return { ...state, questions: newList };
    }
    default: {
      return state;
    }
  }
};

export default selecterReducer;
