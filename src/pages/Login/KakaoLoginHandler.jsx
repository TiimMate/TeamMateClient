import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { defaultInstance } from '../../services/defaultInstance';
import renderLoginButtons from './Home/Login';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Slices/userSlices';
import saveTokens from '../../utils/saveTokens';
import decodePayload from '../../utils/decodePayload';

export default function KakaoLoginHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const response = await defaultInstance.post('/auth/kakao', { code });

        const accessToken = saveTokens(response);
        const decodedPayload = decodePayload(accessToken);

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
    kakaoLogin();
  }, []);

  return <>{renderLoginButtons(null, null, null)}</>;
}
