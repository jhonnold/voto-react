import * as types from '../actions/types';

export const questionsReducer = (state = [], action) => {
  const { type, payload } = action;
  let newState = state.slice();

  switch (type) {
    case types.SESSION_QUESTIONS_RESOLVED:
      //return action.payload;
      return fakeImages;
    case types.SESSION_QUESTIONS_REJECTED:
      //return newState;
      return fakeImages;
    case types.QUESTION_CARD_MOVED:
      newState.splice(payload.index, 1);
      newState.splice(payload.atIndex, 0, payload.question);
      return newState;
    case types.QUESTION_CARD_ADDED:
      newState.push(payload);
      return newState;
    default:
      return state;
  }
};

const fakeImages = [
  {
    id: 1,
    img: 'http://www.electricprism.com/aeron/slideshow/images/1.jpg',
  },
  {
    id: 2,
    img: 'http://www.123-slideshow.com/upload/picscloud/bilder/1.jpg',
  },
  {
    id: 3,
    img: 'https://www.w3schools.com/w3css/img_nature_wide.jpg',
  },
  {
    id: 4,
    img: 'http://i.i.cbsi.com/cnwk.1d/i/tim/2011/01/27/3802c6a696300a0e791424385b28b302e574_1slideshow_maker_2_screen_540x318.JPG',
  },
  {
    id: 5,
    img: 'https://i.ytimg.com/vi/SrCqLlAqtEg/maxresdefault.jpg',
  },
  {
    id: 6,
    img: 'http://cssslider.com/sliders/demo-4/data1/images/4.jpg',
  },
  {
    id:7,
    img: 'http://wowslider.com/sliders/demo-35/data1/images/trainstation1101943.jpg',
  },
  {
    id: 8,
    img: 'https://www.jssor.com/demos/img/gallery/980x380/001.jpg',
  },
  {
    id: 9,
    img: 'http://cssslider.com/sliders/demo-21/thumb.jpg',
  },
];