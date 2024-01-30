import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--Gray100, #f0f0f0);
  padding: 20px;
  width: 100%;
  height: 4.375rem;
`;

export const SpaceName = styled.div`
  margin-right: auto;
  color: var(--kakao-logo, #000);
  text-align: center;

  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
`;
