import styled from 'styled-components';

import Button300 from '../../../../components/atoms/Button300';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 8rem;
  margin: -10px 0;
`;

export const ConfirmBtn = styled(Button300)`
  width: 100%;
  height: 2.8125rem;
  padding: 0.6875rem 0;
  margin-top: 1.1rem;
`;

export const PlainButton = styled(ConfirmBtn)`
  border: 1px solid var(--gray-200, #d9d9d9);

  background: var(--gray-100, #f0f0f0);

  color: var(--gray-300, #636363);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.7px;
  white-space: nowrap;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 0.875rem;
  padding: 0.625rem;

  border-radius: 0.375rem;
  border: 1px solid
    ${(props) => (props.$valid ? 'var(--Gray200, #d9d9d9)' : '#FF0000')};
  background: var(--white, #fff);

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled.p`
  width: 100%;
  padding-left: 10px;
  margin-bottom: -1.1rem;
  color: var(--Error-Red, #f00);

  /* 10pt */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */
  letter-spacing: -0.5px;
`;
