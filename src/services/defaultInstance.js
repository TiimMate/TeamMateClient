import axios from 'axios';

export const defaultInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
