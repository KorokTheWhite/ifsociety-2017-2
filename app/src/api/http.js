import axios from 'axios';

const API = '';

export default axios.create({
  baseURL: API,
  timeout: 10000,
});
