import axios from 'axios';
import {AUTHORS_STATE, API_ENDPOINT_BASE } from '../constants.js'

function fetchAuthorsStart(){
  return {
    type: AUTHORS_STATE.REQUEST_FETCH
  };
}

function fetchAuthorsSuccess(data){
  return {
    type: AUTHORS_STATE.FETCH_SUCCESS,
    payload: data
  };
}

function fetchAuthorsError(error){
  return {
    type: AUTHORS_STATE.FETCH_ERROR,
    payload: error
  }
}

export default ()=> async (dispatch) =>{
  dispatch(fetchAuthorsStart());
  axios
    .get(`${API_ENDPOINT_BASE}/authors`)
    .then(response =>{
      dispatch(fetchAuthorsSuccess(response.data));
    })
    .catch(error =>{
      const errorObj = Object.assign({}, error);
      const errorMessage = errorObj.response
        ? errorObj.response.data.error
        : 'Some thing went wrong! Please contact Support';
      dispatch(fetchAuthorsError(errorMessage));
    })
}
