import React, { useState } from 'react';
import * as S from './MatchListFilter.style';
import UseDetectClose from '../../../hooks/UseDetectClose';
import DownArrow from '../../../assets/dropdown_down_arrow.png';

export default function MatchListFilter() {
  const [regionIsOpen, regionRef, regionHandler] = UseDetectClose(false);
  const [levelIsOpen, levelRef, levelHandler] = UseDetectClose(false);
  const [GenderIsOpen, GenderRef, GenderHandler] = UseDetectClose(false);

  const [dropDownRegion, setDropDownRegion] = useState('지역');
  const [dropDownLevel, setDropDownLevel] = useState(false);
  const [dropDownGender, setDropDownGender] = useState(false);

  return (
    <S.Wrapper>
      <S.DropdownContainer>
        <S.DropdownButton onClick={regionHandler} ref={regionRef}>
          {dropDownRegion} <img src={DownArrow} alt='아래화살표' />
        </S.DropdownButton>
        <S.Menu isDropped={regionIsOpen}>
          <S.Ul>
            <S.Li>
              <S.P href='#1-1' onClick={() => setDropDownRegion('지역')}>
                전체
              </S.P>
            </S.Li>
            <S.Li>
              <S.P href='#1-1' onClick={() => setDropDownRegion('서울')}>
                서울
              </S.P>
            </S.Li>
            <S.Li>
              <S.P href='#1-1' onClick={() => setDropDownRegion('부산')}>
                부산
              </S.P>
            </S.Li>
            <S.Li>
              <S.P href='#1-1' onClick={() => setDropDownRegion('제주도')}>
                제주도
              </S.P>
            </S.Li>
          </S.Ul>
        </S.Menu>
      </S.DropdownContainer>
    </S.Wrapper>
  );
}
