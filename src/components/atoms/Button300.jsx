import styled from 'styled-components';

const Button300 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 300px;
  height: 45px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  border-color: var(--blue-500);

  background: var(--blue-500);
  border: none;
  cursor: pointer;
  color: white;

  color: white;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */

  &:disabled {
    background: var(--gray-200, #d9d9d9);
    cursor: default;
  }
`;

export default Button300;
