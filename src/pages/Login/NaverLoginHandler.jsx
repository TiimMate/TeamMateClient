import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { defaultInstance } from '../../utils/axios';
import { setCookie } from '../../utils/cookie';
import renderLoginButtons from './Home/Login';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/Slices/AuthSlices';

export default function NaverLoginHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

        // 토큰 디코딩->유저 정보 추출
        let payload = NAVER_ACCESS_TOKEN.substring(
          NAVER_ACCESS_TOKEN.indexOf('.') + 1,
          NAVER_ACCESS_TOKEN.lastIndexOf('.'),
        );
        let decodedPayload = JSON.parse(
          decodeURIComponent(escape(atob(payload))),
        );

        dispatch(
          loginUser({
            id: decodedPayload.id,
            nickname: decodedPayload.nickname,
          }),
        );

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
