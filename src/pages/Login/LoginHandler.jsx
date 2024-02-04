import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function LoginHandeler() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    // 인가코드 백으로 보내기
    const kakaoLogin = async () => {
      await axios({
        method: 'post',
        url: 'http://localhost:8000/auth/kakao',
        body: { code: code },
      })
        .then((response) => {
          // 토큰 받기
          console.log(response);
          const KAKAO_ACCESS_TOKEN = response.data.accessToken;
          const KAKAO_REFRESH_TOKEN = response.data.refreshToken;
          localStorage.setItem('kakao_access_token', KAKAO_ACCESS_TOKEN);
          localStorage.setItem('kakao_refresh_token', KAKAO_REFRESH_TOKEN);

          navigate('/welcome-user');
        })
        .catch((error) => {
          console.log(error);
          // navigate('/login');
        }, []);
    };
    kakaoLogin();
  });

  return <div>로그인 중입니다.</div>;
}
