import { useState, useEffect } from 'react';
import * as S from './HeightSelector.style';

function HeightSelector({ height, setHeight }) {
  const defaultValue = ['1', '7', '0']; // 초기 표시값
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (height.length === 3) {
      setIsFocused(false); // 모든 숫자 입력 후 포커스 해제
    }
  }, [height]);

  const handleClickContainer = () => {
    setHeight('');
    setIsFocused(true);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/[^\d]/g, '').slice(0, 3); // 숫자만 입력, 최대 3자리
    setHeight(formattedValue);
  };

  const renderNumbersOrPlaceholders = () => {
    let displayValues = [...defaultValue];
    for (let i = 0; i < height.length; i++) {
      displayValues[i] = height[i]; // 사용자 입력으로 대체
    }

    return displayValues.map((char, index) => (
      <S.NumberOrPlaceholder key={index} isEntered={index < height.length}>
        {char}
      </S.NumberOrPlaceholder>
    ));
  };

  return (
    <>
      <S.Label>신장</S.Label>
      <S.Container $isFocused={isFocused} onClick={handleClickContainer}>
        {renderNumbersOrPlaceholders()}
        <S.UnitText>cm</S.UnitText>
        {isFocused && (
          <S.HiddenInput
            autoFocus
            type='text'
            value={height}
            onChange={handleChange}
            onBlur={() => setIsFocused(false)}
            maxLength='3'
          />
        )}
      </S.Container>
    </>
  );
}

export default HeightSelector;
