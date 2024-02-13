import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { defaultInstance } from '../../services/defaultInstance';
import renderLoginButtons from './Home/Login';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Slices/userSlices';
import saveTokens from '../../utils/saveTokens';
import decodePayload from '../../utils/decodePayload';

export default function NaverLoginHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');

  useEffect(() => {
    const naverLogin = async () => {
      try {
        const response = await defaultInstance.post('/auth/naver', {
          code,
          state,
        });

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
    naverLogin();
  }, []);

  return <>{renderLoginButtons(null, null, null)}</>;
}
