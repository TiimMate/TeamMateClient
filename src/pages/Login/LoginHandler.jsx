import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { defaultInstance } from '../../utils/axios';
import { setCookie } from '../../utils/cookie';
import googleLoginBtn from '../../assets/btn_google_login.svg';
import naverLoginBtn from '../../assets/btn_naver_login.svg';
import kakaoLoginBtn from '../../assets/btn_kakao_login.svg';

export default function LoginHandeler() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const requestBody = { code };
        const response = await defaultInstance.post('/auth/kakao', requestBody);

        const KAKAO_ACCESS_TOKEN = response.data.result.accessToken;
        const KAKAO_REFRESH_TOKEN = response.data.result.refreshToken;
        localStorage.setItem('kakao_access_token', KAKAO_ACCESS_TOKEN);
        setCookie('kakao_refresh_token', KAKAO_REFRESH_TOKEN, { path: '/' });

        navigate('/login/landing');
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    kakaoLogin();
  }, []);

  return (
    <>
      <SocialLoginImgContainer>로그인중입니다.</SocialLoginImgContainer>
      <SocialLoginBtnsContainer>
        <SocialLoginBtn type='button'>
          <img src={googleLoginBtn} alt='googleLogin' />
        </SocialLoginBtn>
        <SocialLoginBtn type='button'>
          <img src={naverLoginBtn} alt='naverLogin' />
        </SocialLoginBtn>
        <SocialLoginBtn type='button'>
          <img src={kakaoLoginBtn} alt='kakaoLogin' />
        </SocialLoginBtn>
      </SocialLoginBtnsContainer>
    </>
  );
}

const SocialLoginImgContainer = styled.div`
  width: 220px;
  height: 220px;
`;

const SocialLoginBtnsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const SocialLoginBtn = styled.div`
  margin: 0;
`;
