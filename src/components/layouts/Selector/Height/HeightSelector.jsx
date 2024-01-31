import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

function HeightSelector({ height }) {
  const [isActive, setIsActive] = useState(false);
  const [numbers, setNumbers] = useState(
    height ? height.split('') : [null, null, null],
  );
  const [numOfInputs, setNumOfInputs] = useState(0);

  const btnRef = useRef();

  const onClickBtn = () => {
    setNumbers([null, null, null]);
    setNumOfInputs(0);
    setIsActive(true);
  };

  // 입력시 키 감지
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isActive) return;
      if (!/^\d$/.test(event.key)) return; // 숫자가 아닐시

      // 숫자 업데이트
      const newNumbers = [...numbers];
      newNumbers[numOfInputs] = event.key;
      setNumbers(newNumbers);
      setNumOfInputs(numOfInputs + 1);
    };

    if (isActive) {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isActive, numbers, numOfInputs]);

  // 버튼 밖 클릭시
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Label>신장</Label>
      <Button ref={btnRef} $isActive={isActive} onClick={onClickBtn}>
        <Number $isReceived={numbers[0]}>{numbers[0] || 1}</Number>
        <Number $isReceived={numbers[1]}>{numbers[1] || 7}</Number>
        <Number $isReceived={numbers[2]}>{numbers[2] || 0}</Number>
        cm
      </Button>
    </>
  );
}

const Label = styled.label`
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

export const Button = styled.button`
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
  border: 1px solid
    ${(props) => (props.$isActive ? '#0075ff' : 'var(--Gray200, #d9d9d9)')};
  background: #fff;
  cursor: pointer;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 100% */
  letter-spacing: -0.09375rem;

  &:focus {
    border: 1px solid #0075ff;
  }
`;

const Number = styled.b`
  color: ${(props) =>
    props.$isReceived ? 'var(--Gray300, #636363)' : 'var(--Gray200, #d9d9d9)'};
  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.625rem; /* 140% */
  letter-spacing: -0.09375rem;
`;

export default HeightSelector;
