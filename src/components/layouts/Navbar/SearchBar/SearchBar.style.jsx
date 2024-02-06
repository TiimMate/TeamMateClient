import styled from 'styled-components';

export const SearchIcon = styled.img`
  flex-shrink: 0;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;

  position: fixed;
  top: 50px;

  width: 100%;
  height: 1000vh;
  z-index: 98;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  height: 3.125rem;
  flex-shrink: 0;

  border-radius: 0.75rem;
  background: var(--white, #fff);
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
  width: 100%;
  height: 2.125rem;
  margin-left: 7%;
  margin-right: 7%;

  color: black;
  &::placeholder {
    color: var(--Gray200, #d9d9d9);
  }
  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;

  border: none;
  border-bottom: 1px solid #0075ff;

  &:focus {
    outline: none;
  }
`;
