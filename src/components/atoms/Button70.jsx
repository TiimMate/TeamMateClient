import styled from 'styled-components';

const Button70 = styled.button`
  display: flex;
  width: 70px;
  height: 30px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 6px;
  border-color: var(--Blue300);
  background: var(--Blue300, #0075ff);
  cursor: pointer;
  color: var(--White, #fff);
  text-align: center;

  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;

  &:disabled {
    background: var(--Gray200, #d9d9d9);
    cursor: default;
  }
`;

export default Button70;
