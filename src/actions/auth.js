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
import Cookies from 'js-cookie';


const BASE_URL = 'https://api.letsdunch.com'

// export const loadUser = () => async (dispatch) => {
//   if (Cookies.get('token')) {
//     setAuthToken(Cookies.get('token'));
//   }

//   try {
//     const res = await axios.get(`${BASE_URL}/profile`);
//     dispatch({
//       type: USER_LOADED,
//       payload: res.data,
//     });
//     console.log(res.data);
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

//register

export const registration = ({firstName, lastName, email, password}) => async (
  dispatch
) => {
  console.log({firstName, lastName, email, password})
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ firstName, lastName, email, password });
  console.log(body);
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
    // dispatch(loadUser());
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
export const login = ({email, password}) => async (dispatch) => {
  console.log({email, password})
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
    // dispatch(loadUser());
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
