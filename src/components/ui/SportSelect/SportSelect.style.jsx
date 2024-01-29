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

  color: var(--Blue300, #0075ff);
  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.0375rem;

  box-sizing: border-box;
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
  border: 2px solid var(--Blue300, #0075ff);

  background: url('/assets/chevron-down-5 1.svg') no-repeat 98% 50%/1.5rem auto;

  color: var(--Blue300, #0075ff);
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }

  &:focus {
    //#TODO: 색깔 안변하는 문제
    border: 2px solid var(--Blue300, #0075ff);
  }

  option {
    border: 2px solid var(--Blue300, #0075ff);
  }
`;
