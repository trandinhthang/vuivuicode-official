import axios from 'axios';
import { LOGIN_API } from '../index';

const login = async (params) => {
  let data;
  try {
    const res = await axios.post(LOGIN_API, params);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};

export default login;
