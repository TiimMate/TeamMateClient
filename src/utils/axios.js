import axios from 'axios';

/** @deprecated: use /services/defaultInstance */
export const defaultInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
