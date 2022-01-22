import axios from 'axios';
import { POSTS_API } from '../index';

export const getAll = async () => {
  let data;
  try {
    const res = await axios.get(`${POSTS_API}/all`);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
