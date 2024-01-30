import styled from 'styled-components';

const Button130 = styled.button`
  display: flex;
  width: 130px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--blue-400, #0075ff);
  cursor: pointer;
  color: white;
  text-align: center;

  /* 12md */
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: 150%; /* 183.333% */

  &:disabled {
    background: var(--gray-200, #d9d9d9);
    cursor: default;
  }
`;

export default Button130;
