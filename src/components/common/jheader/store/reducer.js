import { SEARCH_FOCUS, SEARCH_BLUR, LIST_FOCUS } from './action-types';

const defaultState = {
  focused: false,
  list: []
};

export default (state = defaultState, action) => {

  let newState = {...state};
  switch (action.type) {
    case SEARCH_FOCUS:
      newState.focused = action.data;
      return newState;
    case SEARCH_BLUR:
      newState.focused = action.data;
      return newState;
    case LIST_FOCUS:
      newState.list = action.data;
      return newState;
    default:
      return state;
  }

}