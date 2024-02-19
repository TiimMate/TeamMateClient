import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  color: var(--Gray200, #d9d9d9);
  font-size: 12px;

  &:hover {
    background: var(--Blue200, #bddbff);
    cursor: pointer;
  }

  &[disabled] {
    background: white;
    cursor: revert;
  }

  &[aria-current] {
    color: var(--Blue300, #0075ff);
    font-weight: bold;
    cursor: revert;
  }
`;
