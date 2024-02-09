import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { defaultInstance } from '../../utils/axios';
import { setCookie } from '../../utils/cookie';
import renderLoginButtons from './Home/Login';

export default function KakaoLoginHandler() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const requestBody = { code };
        const response = await defaultInstance.post('/auth/kakao', requestBody);

        console.log(response);

        const KAKAO_ACCESS_TOKEN = response.data.result.accessToken;
        const KAKAO_REFRESH_TOKEN = response.data.result.refreshToken;
        localStorage.setItem('kakao_access_token', KAKAO_ACCESS_TOKEN);
        setCookie('kakao_refresh_token', KAKAO_REFRESH_TOKEN, { path: '/' });

        let payload = KAKAO_ACCESS_TOKEN.substring(
          KAKAO_ACCESS_TOKEN.indexOf('.') + 1,
          KAKAO_ACCESS_TOKEN.lastIndexOf('.'),
        );

        navigate('/login/landing');
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    kakaoLogin();
  }, []);

  return <>{renderLoginButtons(null, null, null)}</>;
}
