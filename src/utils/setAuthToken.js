import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['X-Fields'] = token;
  } else {
    delete axios.defaults.headers.common['X-Fields'];
  }
};
export default setAuthToken;
