import axios from 'axios';
import { POSTS_COMMENT_API } from '../index';

export const deleteOne = async (params) => {
  let data;
  const { accessToken, ...rest } = params;
  try {
    const res = await axios.put(POSTS_COMMENT_API, rest, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
