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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  width: 98%;
  height: 100%;
  margin-left: 1%;
  margin-bottom: 1.25rem;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid
    ${(props) => (props.$isFocused ? '#0075ff' : 'var(--Gray200, #d9d9d9)')};

  background: #fff;
  cursor: pointer;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 100% */
  letter-spacing: -0.09375rem;

  box-sizing: border-box;
`;

export const NumberOrPlaceholder = styled.span`
  width: 1.2rem; /* 고정 너비 */
  display: inline-block;
  text-align: center;
  color: ${(props) =>
    props.isEntered
      ? 'color: var(--Gray300, #636363)'
      : '#ccc'}; /* 입력된 숫자는 검정색, 그렇지 않은 경우 회색 */
`;

export const UnitText = styled.span`
  color: var(--Gray300, #636363); /* 회색 */
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
