import React from 'react';
import styled from 'styled-components';

export default function Banner() {
  return <BannerSection />;
}

const BannerSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 160px;

  background: var(--Blue400, #2e69ff);
`;
