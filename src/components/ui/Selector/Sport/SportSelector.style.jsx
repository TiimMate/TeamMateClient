import styled from 'styled-components';

export const Wrapper = styled.section`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 5% 10%;
  gap: 0.1875rem;

  background: var(--white, #fff);

  box-sizing: border-box;
`;
export const Title = styled.h4`
  color: ${(props) =>
    props.$disabled ? 'var(--Gray300, #636363)' : 'var(--Blue300, #0075ff)'};
  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.0375rem;
`;
export const SelectBar = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0.625rem;
  gap: 14.5rem;
  border-radius: 0.375rem;

  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  border: 2px solid var(--Blue300, #0075ff);
  background: url('/assets/chevron-down-5 1.svg') no-repeat 98% 50%/1.5rem auto;
  color: var(--Blue300, #0075ff);

  &:disabled {
    border: 1px solid var(--Gray200, #d9d9d9);
    background: var(--Gray100, #f0f0f0);
    color: var(--Gray300, #636363);
  }

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }

  &:focus {
    outline: none;
  }

  option {
    border: 2px solid var(--Blue300, #0075ff);
  }
`;
