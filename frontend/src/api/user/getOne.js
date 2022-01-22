import axios from 'axios';
import { USER_API } from '../index';

export const getOne = async (accessToken) => {
  let data;
  try {
    const res = await axios.get(`${USER_API}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
