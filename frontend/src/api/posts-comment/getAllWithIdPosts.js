import axios from 'axios';
import { POSTS_COMMENT_API } from '../index';

export const getAllWithIdPosts = async (id) => {
  let data;
  try {
    const res = await axios.get(`${POSTS_COMMENT_API}/all/${id}`);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
