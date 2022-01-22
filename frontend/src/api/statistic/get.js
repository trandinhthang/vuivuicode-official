import axios from 'axios';
import { STATISTIC_API } from '../index';

export const get = async ({ accessToken }) => {
  let data;
  try {
    const res = await axios.get(STATISTIC_API, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
