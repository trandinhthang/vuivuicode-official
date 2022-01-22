import axios from 'axios';
import { CATEGORY_ALL_API } from '../index';

export const getAll = async () => {
  let data;
  try {
    const res = await axios.get(CATEGORY_ALL_API);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};
