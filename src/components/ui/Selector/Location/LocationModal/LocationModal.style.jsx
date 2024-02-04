import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열, 각 열은 같은 크기 */

  margin: -10px -10px 2.5rem -10px;

  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.85rem;
  padding: 0.3125rem 0rem;

  background: var(--Blue100, #f4f9ff);

  color: var(--Gray200, #d9d9d9);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.8125rem; /* 181.25% */
  letter-spacing: -0.05rem;

  ${(props) =>
    props.$selected && 'background: var(--Blue300, #0075FF); color: white;'}
`;
