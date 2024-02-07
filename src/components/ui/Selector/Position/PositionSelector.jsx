import { useState, useEffect } from 'react';
import * as S from './PositionSelector.style';

function PositionSelector({ position, setPosition }) {
  const defaultValue = ['센', '터', '포', '워', '드']; // 초기 표시값
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (position.length === 8) {
      setIsFocused(false); // 모든 숫자 입력 후 포커스 해제
    }
  }, [position]);

  const handleClickContainer = () => {
    setPosition('');
    setIsFocused(true);
  };

  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  const renderNumbersOrPlaceholders = () => {
    let displayValues = position ? position.split('') : [...defaultValue];

    return displayValues.map((char, index) => (
      <S.NumberOrPlaceholder key={index} $isInput={index < position.length}>
        {char}
      </S.NumberOrPlaceholder>
    ));
  };

  return (
    <>
      <S.Label>포지션</S.Label>
      <S.Container $isFocused={isFocused} onClick={handleClickContainer}>
        {renderNumbersOrPlaceholders()}
        {isFocused && (
          <S.HiddenInput
            autoFocus
            type='text'
            value={position}
            onChange={handleChange}
            onBlur={() => setIsFocused(false)}
            maxLength='8'
          />
        )}
      </S.Container>
    </>
  );
}

export default PositionSelector;
