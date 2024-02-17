import { setCookie } from './cookie';

const saveTokens = (response) => {
  const accessToken = response.data.result.accessToken;
  const refreshToken = response.data.result.refreshToken;

  localStorage.setItem('access_token', accessToken);
  setCookie('refresh_token', refreshToken, { path: '/' });
  return accessToken;
};
export default saveTokens;
