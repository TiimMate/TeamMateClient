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
  border: none;
  background: var(--blue-400, #0075ff);
  cursor: pointer;
  color: white;
  text-align: center;

  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;

  &:disabled {
    background: var(--gray-200, #d9d9d9);
    cursor: default;
  }
`;

export default Button70;
