import axios from 'axios';
import invariant from 'invariant';
import ApiError from './ApiError';

async function fetch(url, options = {}) {
  const finalOptions = Object.assign(options, { url });
  const response = await axios.request(finalOptions);
  return response.data;
}

export default fetch;
