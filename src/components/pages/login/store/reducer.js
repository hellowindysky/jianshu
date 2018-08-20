import { fromJS } from 'immutable';
import { SSSS, LOGOUT } from './action-types';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case SSSS:
      return state.set('login', action.value);
    case LOGOUT:
			return state.set('login', action.value);
    default:
      return state;
  }

}