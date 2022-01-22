import axios from 'axios';
import { POSTS_CATEGORY_API } from '../index';

export const getToCategory = async (params) => {
  let data;
  const { id, page, limit } = params;
  try {
    const res = await axios.get(
      `${POSTS_CATEGORY_API}/${id}?page=${page}&limit=${limit}`
    );
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
