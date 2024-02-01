import React, { useState } from 'react';
import * as S from './MatchListFilter.style';

export default function MatchListFilter() {
  const [dropDownRegion, setDropDownRegion] = useState(false);
  const [dropDownLevel, setDropDownLevel] = useState(false);
  const [dropDownGender, setDropDownGender] = useState(false);

  return (
    <S.Wrapper>
      <S.DropDown
        onClick={() => {
          setDropDownRegion(!dropDownRegion);
        }}
      >
        내지역{dropDownRegion ? '⌃' : '⌄'}
        {dropDownRegion && (
          <>
            <S.DropdownList>수도권</S.DropdownList>
            <S.DropdownList>그 외</S.DropdownList>
          </>
        )}
      </S.DropDown>

      <S.DropDown
        onClick={() => {
          setDropDownLevel(!dropDownLevel);
        }}
      >
        레벨{dropDownLevel ? '⌃' : '⌄'}
        {dropDownLevel && (
          <>
            <S.DropdownList>1~10</S.DropdownList>
            <S.DropdownList>11~20</S.DropdownList>
            <S.DropdownList>21~30</S.DropdownList>
          </>
        )}
      </S.DropDown>

      <S.DropDown
        onClick={() => {
          setDropDownGender(!dropDownGender);
        }}
      >
        성별{dropDownGender ? '⌃' : '⌄'}
        {dropDownGender && (
          <>
            <S.DropdownList>남성</S.DropdownList>
            <S.DropdownList>여성</S.DropdownList>
            <S.DropdownList>혼성</S.DropdownList>
          </>
        )}
      </S.DropDown>
    </S.Wrapper>
  );
}
