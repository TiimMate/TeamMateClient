import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Login.style';

import googleLoginBtn from '../../../assets/btn_google_login.svg';
import naverLoginBtn from '../../../assets/btn_naver_login.svg';
import kakaoLoginBtn from '../../../assets/btn_kakao_login.svg';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;

export default function Login() {
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <S.socialLoginImgContainer>img</S.socialLoginImgContainer>
      <S.socialLoginBtnsContainer>
        <Link to='/welcome-user'>
          <img src={googleLoginBtn} alt='googleLogin' />
        </Link>
        <img src={naverLoginBtn} alt='naverLogin' />
        <S.socialLoginBtn type='button' onClick={kakaoLogin}>
          <img src={kakaoLoginBtn} alt='kakaoLogin' />
        </S.socialLoginBtn>
      </S.socialLoginBtnsContainer>
    </>
  );
}
