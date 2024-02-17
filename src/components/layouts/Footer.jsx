import React from 'react';
import * as S from './Footer.style';
import Logo from '../../assets/Logo24_.png';
import Instagram from '../../assets/icon-sns-instagram.svg';

const SNS_ITEM_LIST = [
  {
    label: 'official_teammate',
    src: Instagram,
  },
];

export default function Footer() {
  return (
    <S.Container>
      <S.ServiceTitle>
        <S.ServiceLogo>
          <img src={Logo} alt='팀메이트 로고' />
        </S.ServiceLogo>
        <S.ServiceName>팀메이트</S.ServiceName>
      </S.ServiceTitle>
      <S.ServiceInfo>
        <S.SocialContainer>
          {SNS_ITEM_LIST.map(({ label, src }) => (
            <S.Social key={label}>
              <S.SocialIcon>
                <img src={src} alt={label} />
              </S.SocialIcon>
              <S.SocialName>{label}</S.SocialName>
            </S.Social>
          ))}
        </S.SocialContainer>
        <S.Copyright>Copyright © Teammate All rights reserved.</S.Copyright>
      </S.ServiceInfo>
    </S.Container>
  );
}
