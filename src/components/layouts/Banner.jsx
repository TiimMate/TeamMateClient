import React from 'react';
import styled from 'styled-components';
import teammateBanner from '../../assets/banner-teammate.png';

export default function Banner() {
  return <BannerSection />;
}

const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  background-image: url(${teammateBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
