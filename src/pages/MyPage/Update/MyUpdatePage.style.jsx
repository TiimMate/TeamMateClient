import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0rem;
`;

export const Label = styled.label`
  cursor: pointer;
  color: var(--gray-300, #636363);
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
export const Input = styled.input`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--gray-200, #d9d9d9);
  background: var(--gray-100, #f0f0f0);

  border-radius: 0.375rem;
  border: 1px solid var(--gray-200, #d9d9d9);
  background: var(--gray-100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  font-family: Pretendard Variable;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.04375rem;
`;

export const NameSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-items: start;

  padding: 1.5rem 5%;

  label {
    padding-left: 1.5%;
  }
`;

export const NameInput = styled(Input)`
  width: 97%;
  margin-left: 1.5%;
  margin-bottom: 1.25rem;

  box-sizing: border-box;
`;
export const TextArea = styled.textarea`
  width: 97%;
  margin-left: 1.5%;
  box-sizing: border-box;
  padding: 0.625rem 0.75rem;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-200, #d9d9d9);

  background: var(--gray-100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;

export const DetailSection = styled(NameSection)``;
