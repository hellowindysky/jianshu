import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from "./action-types";
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (data) => ({type: CHANGE_HOME_DATA, data: fromJS(data)});
const addHomeList = (data) => ({type: ADD_HOME_LIST, data: fromJS(data)});

export const toggleTopShow = (data) => ({type: TOGGLE_TOP_SHOW, data: data})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      if (res.data.success) {
        dispatch(changeHomeData(res.data.data))
      }
      
    });
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      if (res.data.success) {
        dispatch(addHomeList(res.data.data))
      }
      
    });
  }
}