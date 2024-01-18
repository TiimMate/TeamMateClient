import React from 'react';
import { Link } from 'react-router-dom';

import googleLoginBtn from '../../assets/btn_google_login.svg';
import naverLoginBtn from '../../assets/btn_naver_login.svg';
import kakaoLoginBtn from '../../assets/btn_kakao_login.svg';
import * as S from './Login.style';

export default function Login() {
  return (
    <>
      <S.socialLoginImgContainer>img</S.socialLoginImgContainer>
      <S.socialLoginBtnsContainer>
        <Link to='/welcome-user'>
          <img src={googleLoginBtn} alt='googleLogin' />
        </Link>
        <img src={naverLoginBtn} alt='naverLogin' />
        <img src={kakaoLoginBtn} alt='kakaoLogin' />
      </S.socialLoginBtnsContainer>
    </>
  );
}
