import axios from 'axios';
import { POSTS_API } from '../index';

export const search = async (search) => {
  let data;
  try {
    const res = await axios.get(`${POSTS_API}/search?q=${search}`);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
