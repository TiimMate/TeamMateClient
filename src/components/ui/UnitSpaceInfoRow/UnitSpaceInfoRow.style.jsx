import styled from 'styled-components';
import Button70 from '../../atoms/Button70';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;

  align-items: center;
  border-top: 1px solid var(--gray-100, #f0f0f0);
  padding: 20px;
  width: 100%;
  height: 4.375rem;
`;

export const Title = styled(Link)`
  margin-right: 0 auto;
  width: 62%;
  color: var(--kakao-logo, #000);
  text-align: left;

  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;

export const ApplyButton = styled(Button70)`
  margin-left: auto;
`;

export const ClosedButton = styled(Button70)`
  background: var(--Gray300, #636363);
  margin-left: auto;
`;
