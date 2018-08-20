import {combineReducers} from 'redux-immutable';

import { headerReducer } from '../components/common/jheader/store';
import { homeReducer } from '../components/pages/home/store';
import { detailReducer } from '../components/pages/detail/store';
import { loginReducer } from '../components/pages/login/store';

export default combineReducers({
  headerReducer,
  homeReducer,
  detailReducer,
  loginReducer
});