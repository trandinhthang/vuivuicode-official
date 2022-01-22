import axios from 'axios';
import { POSTS_API } from '../index';

export const getOne = async (id) => {
  let data;
  try {
    const res = await axios.get(`${POSTS_API}/${id}`);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
