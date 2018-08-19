import {combineReducers} from 'redux-immutable';

import { headerReducer } from '../components/common/jheader/store';
import { homeReducer } from '../components/pages/home/store';

export default combineReducers({
  headerReducer,
  homeReducer
});