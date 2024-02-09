import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { defaultInstance } from '../../utils/axios';
import { setCookie } from '../../utils/cookie';
import renderLoginButtons from './Home/Login';

export default function NaverLoginHandler() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');

  useEffect(() => {
    const naverLogin = async () => {
      try {
        const requestBody = { code, state };
        const response = await defaultInstance.post('/auth/naver', requestBody);
        console.log(response);

        const NAVER_ACCESS_TOKEN = response.data.result.accessToken;
        const NAVER_REFRESH_TOKEN = response.data.result.refreshToken;
        localStorage.setItem('naver_access_token', NAVER_ACCESS_TOKEN);
        setCookie('naver_refresh_token', NAVER_REFRESH_TOKEN, { path: '/' });

        navigate('/login/landing');
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    naverLogin();
  }, []);

  return <>{renderLoginButtons(null, null, null)}</>;
}
