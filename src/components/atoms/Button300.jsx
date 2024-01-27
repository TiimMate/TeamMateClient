import styled from 'styled-components';

const Button300 = styled.button`
  display: flex;
  width: 300px;
  height: 45px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;

  background: var(--blue-500);
  border: none;
  cursor: pointer;
  color: white;

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */

  &:disabled {
    background: var(--Gray200, #d9d9d9);
    cursor: default;
  }
`;

export default Button300;
