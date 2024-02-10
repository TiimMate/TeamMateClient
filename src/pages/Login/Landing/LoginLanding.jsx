import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import highFive from '../../../assets/highfive.png';
import Button300 from '../../../components/atoms/Button300';
import * as S from './LoginLanding.style';

export default function LoginLanding() {
  const navigate = useNavigate();
  const { nickname } = useSelector((state) => state.user);
  const goHome = () => {
    navigate('/');
  };
  return (
    <S.welcomeContainer>
      <S.welcomeMsg>{nickname} 메이트님, 환영합니다!</S.welcomeMsg>
      <S.welcomeBoxContainer>
        <S.welcomeImg src={highFive} alt='highFiveImg' />
        <Button300 onClick={goHome}>홈으로 이동</Button300>
      </S.welcomeBoxContainer>
    </S.welcomeContainer>
  );
}
