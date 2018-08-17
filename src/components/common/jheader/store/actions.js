import { SEARCH_FOCUS, SEARCH_BLUR, LIST_FOCUS } from "./action-types";
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({type: LIST_FOCUS, data: fromJS(data), totalPage: Math.ceil(data.length / 10)});

export const handleIptFocus = (data) => ({type: SEARCH_FOCUS, data: data});
export const handleIptBlur = (data) => ({type: SEARCH_BLUR, data: data});
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerlist.json').then((res) => {
      if (res.data.success) {
        dispatch(changeList(res.data.data));
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}