import axios from 'axios';
import { getCookie, removeCookie, setCookie } from '../utils/cookie';
import { defaultInstance } from '../services/defaultInstance';

const getAccessToken = () => localStorage.getItem('access_token');
const getRefreshToken = () => getCookie('refresh_token');

const postRefreshToken = async () => {
  try {
    const response = await defaultInstance.post(
      'auth/refresh',
      {},
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
          refresh: `${getRefreshToken()}`,
        },
      },
    );
    const { accessToken, refreshToken } = await response.data.result;
    return { accessToken, refreshToken };
  } catch (err) {
    console.log(err);
    removeTokens();
    alert('로그인이 필요합니다.');
    window.location.replace('/login');
  }
};

const setTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem('access_token', accessToken);
  setCookie('refresh_token', refreshToken, { path: '/' });
};

const removeTokens = () => {
  localStorage.removeItem('access_token');
  removeCookie('refresh_token');
};

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
});

authInstance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config }; //lodash?
    const accessToken = getAccessToken();

    if (accessToken) {
      newConfig.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

authInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status !== 401) return Promise.reject(err);

    const { code } = err.response.data;

    switch (code) {
      case 'AUTH002': //access 만료
        const tokens = await postRefreshToken();
        setTokens(tokens);
        return;

      default: // AUTH001 ~ 006
        console.dir(err);
        removeTokens();
        alert('로그인이 필요합니다.');
        window.location.replace('/login');
        return;
    }
  },
);

export default authInstance;
