import axios from 'axios';
import { POSTS_COMMENT_API } from '../index';

export const updateOne = async (params) => {
  let data;
  const { accessToken, id, content } = params;
  try {
    const res = await axios.put(
      `${POSTS_COMMENT_API}/${id}`,
      { content },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
