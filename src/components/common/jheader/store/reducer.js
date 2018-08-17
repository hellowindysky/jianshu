import { SEARCH_FOCUS, SEARCH_BLUR, LIST_FOCUS } from './action-types';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
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
      return state.set('list', action.data).set('totalPage', action.totalPage);
    default:
      return state;
  }

}