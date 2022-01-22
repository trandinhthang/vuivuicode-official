import axios from 'axios';
import { POSTS_COMMENT_API } from '../index';

export const createOne = async (params) => {
  let data;
  const { accessToken, ...comments } = params;

  try {
    const res = await axios.post(POSTS_COMMENT_API, comments, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
