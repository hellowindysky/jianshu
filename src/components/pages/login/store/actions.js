import {  SSSS, LOGOUT } from "./action-types";
import axios from 'axios';
// import { fromJS } from 'immutable';


export const changeLogin = () => ({type: SSSS, value: true});

export const logout = () => ({
	type: LOGOUT,
	value: false
})

export const login = (accout, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
      const result = res.data.data;
			if (result) {
				dispatch(changeLogin());
			}else {
				alert('登陆失败')
			}
      
    });
  }
}
