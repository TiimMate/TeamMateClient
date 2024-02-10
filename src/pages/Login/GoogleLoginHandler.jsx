import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { defaultInstance } from '../../utils/axios';
import { setCookie } from '../../utils/cookie';
import renderLoginButtons from './Home/Login';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Slices/userSlices';

export default function GoogleLoginHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const googleLogin = async () => {
      try {
        const requestBody = { code };
        const response = await defaultInstance.post(
          '/auth/google',
          requestBody,
        );
        console.log(response);

        const GOOGLE_ACCESS_TOKEN = response.data.result.accessToken;
        const GOOGLE_REFRESH_TOKEN = response.data.result.refreshToken;
        localStorage.setItem('google_access_token', GOOGLE_ACCESS_TOKEN);
        setCookie('google_refresh_token', GOOGLE_REFRESH_TOKEN, { path: '/' });

        let payload = GOOGLE_ACCESS_TOKEN.substring(
          GOOGLE_ACCESS_TOKEN.indexOf('.') + 1,
          GOOGLE_ACCESS_TOKEN.lastIndexOf('.'),
        );
        let decodedPayload = JSON.parse(
          decodeURIComponent(escape(atob(payload))),
        );

        dispatch(
          login({
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
    googleLogin();
  }, []);

  return <>{renderLoginButtons(null, null, null)}</>;
}
