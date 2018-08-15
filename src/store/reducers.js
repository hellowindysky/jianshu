import {combineReducers} from 'redux';
import { SEARCH_FOCUS, SEARCH_BLUR } from './action-types';

const defaultState = {
  focused: false
};

const focusReducer = (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    let newState = {...state};
    newState.focused = action.data;
    return newState;
  } else if (action.type === SEARCH_BLUR) {
    let newState = {...state};
    newState.focused = action.data;
    return newState;
  }
  return state;
}

export default combineReducers({
  focusReducer
});