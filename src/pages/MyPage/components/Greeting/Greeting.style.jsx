import styled from 'styled-components';
import CircleLogo from '../../../../components/atoms/CircleLogo';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.19rem 4.44%;
`;
export const Hello = styled.h2`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -1.2px;
`;

export const Strong = styled.strong`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -1.2p;
`;

export const Logo = styled(CircleLogo)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;

  fill: var(--Blue100, #f4f9ff);
`;

export const Person = styled.img`
  width: 48px;
  height: 48px;
`;
