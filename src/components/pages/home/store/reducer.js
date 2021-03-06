import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './action-types';

const defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: [],
  showScroll: false
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.data.get('topicList'),
        articList: action.data.get('articList'),
        recommendList: action.data.get('recommendList')
      });
    case ADD_HOME_LIST:
      return state.set('articList', state.get('articList').concat(action.data));
    case TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.data);
    default:
      return state;
  }

}