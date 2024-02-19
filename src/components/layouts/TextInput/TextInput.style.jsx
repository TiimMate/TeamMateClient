import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem 0.5rem;
  align-items: center;
  align-content: center;
  width: 100%;
  gap: 0.625rem;
  flex-wrap: wrap;
  border-radius: 0.375rem;
  border: 0.0625rem solid
    ${(props) =>
      props.valid ? 'var(--Gray200, #d9d9d9)' : 'var(--Error-Red, #F00)'};
  background: #fff;
  caret-color: #2c8dff;
  color: var(--Gray300, #636363);

  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.valid ? 'var(--Blue300, #0075FF)' : 'var(--Error-Red, #F00)'};
  }
`;

export const ErrorMessage = styled.div`
  color: var(--Error-Red, #f00);

  /* 10pt */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */
  letter-spacing: -0.5px;
`;
