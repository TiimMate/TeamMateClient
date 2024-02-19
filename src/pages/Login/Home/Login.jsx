import React from 'react';
import * as S from './Login.style';

import googleLoginBtn from '../../../assets/btn_google_login.svg';
import naverLoginBtn from '../../../assets/btn_naver_login.svg';
import kakaoLoginBtn from '../../../assets/btn_kakao_login.svg';
import logoIcon from '../../../assets/icon_logo.svg';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URL;
const NAVER_STATE = 'test';
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE}`;

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URL;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile&`;

export default function Login() {
  const googleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };
  const naverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return <>{renderLoginButtons(googleLogin, naverLogin, kakaoLogin)}</>;
}

export const renderLoginButtons = (googleLogin, naverLogin, kakaoLogin) => {
  return (
    <S.Wrapper>
      <S.LogoImg src={logoIcon} alt='logoIcon' />
      <S.LoginBtnsContainer>
        <S.LoginBtn onClick={googleLogin}>
          <img src={googleLoginBtn} alt='googleLogin' />
        </S.LoginBtn>
        <S.LoginBtn onClick={naverLogin}>
          <img src={naverLoginBtn} alt='naverLogin' />
        </S.LoginBtn>
        <S.LoginBtn onClick={kakaoLogin}>
          <img src={kakaoLoginBtn} alt='kakaoLogin' />
        </S.LoginBtn>
      </S.LoginBtnsContainer>
    </S.Wrapper>
  );
};
