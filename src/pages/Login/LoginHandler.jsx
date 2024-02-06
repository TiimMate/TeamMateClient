import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function LoginHandeler() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const requestBody = { code };
        const response = await axios.post(
          'http://localhost:3001/auth/kakao',
          requestBody,
        );

        const KAKAO_ACCESS_TOKEN = response.data.result.accessToken;
        const KAKAO_REFRESH_TOKEN = response.data.result.refreshToken;
        localStorage.setItem('kakao_access_token', KAKAO_ACCESS_TOKEN);
        localStorage.setItem('kakao_refresh_token', KAKAO_REFRESH_TOKEN);

        navigate('/login/landing');
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    kakaoLogin();
  }, []);

  return <div>로그인 중입니다.</div>;
}
