import React, { useState } from 'react';
import * as S from './MatchListFilter.style';
import UseDetectClose from '../../../hooks/UseDetectClose';
import DownArrow from '../../../assets/dropdown_down_arrow.png';

export default function MatchListFilter(props) {
  const [regionIsOpen, regionRef, regionHandler] = UseDetectClose(false);
  const [levelIsOpen, levelRef, levelHandler] = UseDetectClose(false);
  const [GenderIsOpen, GenderRef, GenderHandler] = UseDetectClose(false);

  const [dropDownRegion, setDropDownRegion] = useState('지역');
  const [dropDownLevel, setDropDownLevel] = useState('레벨');
  const [dropDownGender, setDropDownGender] = useState('성별');

  return (
    <S.Wrapper>
      <S.DropdownContainer>
        <S.DropdownButton onClick={regionHandler} ref={regionRef}>
          {dropDownRegion} <img src={DownArrow} alt='아래화살표' />
        </S.DropdownButton>
        <S.Menu isDropped={regionIsOpen}>
          <S.Ul>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('지역');
                  props.setRegionFilter('전체');
                }}
              >
                전체
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('서울');
                  props.setRegionFilter('서울');
                }}
              >
                서울
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('부산');
                  props.setRegionFilter('부산');
                }}
              >
                부산
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('제주도');
                  props.setRegionFilter('제주도');
                }}
              >
                제주도
              </S.P>
            </S.Li>
          </S.Ul>
        </S.Menu>
      </S.DropdownContainer>

      <S.DropdownContainer>
        <S.DropdownButton onClick={levelHandler} ref={levelRef}>
          {dropDownLevel} <img src={DownArrow} alt='아래화살표' />
        </S.DropdownButton>
        <S.Menu isDropped={levelIsOpen}>
          <S.Ul>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('0~10');
                  props.setLevelFilter('0~10');
                }}
              >
                0~10
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('10~20');
                  props.setLevelFilter('10~20');
                }}
              >
                10~20
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('20~30');
                  props.setLevelFilter('20~30');
                }}
              >
                20~30
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('30~40');
                  props.setLevelFilter('30~40');
                }}
              >
                30~40
              </S.P>
            </S.Li>
          </S.Ul>
        </S.Menu>
      </S.DropdownContainer>

      <S.DropdownContainer>
        <S.DropdownButton onClick={GenderHandler} ref={GenderRef}>
          {dropDownGender} <img src={DownArrow} alt='아래화살표' />
        </S.DropdownButton>
        <S.Menu isDropped={GenderIsOpen}>
          <S.Ul>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownGender('혼성');
                  props.setGenderFilter('혼성');
                }}
              >
                혼성
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownGender('남성');
                  props.setGenderFilter('남성');
                }}
              >
                남성
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownGender('여성');
                  props.setGenderFilter('여성');
                }}
              >
                여성
              </S.P>
            </S.Li>
          </S.Ul>
        </S.Menu>
      </S.DropdownContainer>
    </S.Wrapper>
  );
}
