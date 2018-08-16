import { SEARCH_FOCUS, SEARCH_BLUR, LIST_FOCUS } from "./action-types";
import axios from 'axios';

export const handleIptFocus = (data) => ({type: SEARCH_FOCUS, data: data});
export const handleIptBlur = (data) => ({type: SEARCH_BLUR, data: data});
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerlist.json').then((res) => {
      if (res.data.success) {
        dispatch({type: LIST_FOCUS, data: res.data.data});
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}