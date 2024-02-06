import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  color: var(--Gray300, #636363);
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
  background-color: transparent;
  border: none;
  margin-bottom: 0.31rem;
`;

export const ButtonWithChevron = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  width: 98%;
  height: 100%;
  margin-left: 1%;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: #fff;
  cursor: pointer;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.125rem */
  letter-spacing: -0.0375rem;
`;
