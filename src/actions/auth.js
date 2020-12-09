import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';


const BASE_URL = 'http://api.letsdunch.com'

export const loadUser = () => async (dispatch) => {
  if (localStorage.Authorization) {
    setAuthToken(localStorage.Authorization);
  }

  try {
    const res = await axios.get('http://15.206.149.206/user/me');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register

export const registration = (fname, lname, email, password) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ fname, lname, email, password });
  try {
    const res = await axios.post(
      `${BASE_URL}/signup`,
      body,
      config
    );


    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    
    dispatch(setAlert(err.message, 'danger'));
    const errors = err?.response?.data?.errors;
    if (errors) {
      
      errors.map((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      `${BASE_URL}/signin`,
      body,
      config
    );

    

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.message, 'danger'));
    const errors = err?.response?.data?.errors;
    if (errors) {
      errors.map((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
