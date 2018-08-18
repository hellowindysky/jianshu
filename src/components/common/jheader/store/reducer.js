import { SEARCH_FOCUS, SEARCH_BLUR, LIST_FOCUS, MOUSE_IN_LIST, MOUSE_OUT_LIST, TO_NEXT_PAGE } from './action-types';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseInList: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', action.data);
    case SEARCH_BLUR:
      return state.set('focused', action.data);
    case LIST_FOCUS:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case MOUSE_IN_LIST:
      return state.set('mouseInList', action.data);
    case MOUSE_OUT_LIST:
      return state.set('mouseInList', action.data);
    case TO_NEXT_PAGE:
      return state.set('page', action.data);
    default:
      return state;
  }

}