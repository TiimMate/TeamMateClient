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
  border-color: var(--blue-500);
  cursor: pointer;
  color: white;

  &:disabled {
    background: var(--Gray200, #d9d9d9);
    cursor: default;
  }
`;

export default Button300;
