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
                  props.setFilter('전체');
                  props.setFilterCate('');
                }}
              >
                전체
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('서울');
                  props.setFilter('서울특별시');
                  props.setFilterCate('region');
                }}
              >
                서울특별시
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('부산');
                  props.setFilter('부산광역시');
                  props.setFilterCate('region');
                }}
              >
                부산광역시
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownRegion('제주도');
                  props.setFilter('제주도');
                  props.setFilterCate('region');
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
                  props.setFilter(0);
                  props.setFilterCate('level');
                }}
              >
                0~10
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('10~20');
                  props.setFilter(1);
                  props.setFilterCate('level');
                }}
              >
                10~20
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('20~30');
                  props.setFilter(2);
                  props.setFilterCate('level');
                }}
              >
                20~30
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownLevel('30~40');
                  props.setFilter(99);
                  props.setFilterCate('level');
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
                  props.setFilter('MX');
                  props.setFilterCate('gender');
                }}
              >
                혼성
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownGender('남성');
                  props.setFilter('M');
                  props.setFilterCate('gender');
                }}
              >
                남성
              </S.P>
            </S.Li>
            <S.Li>
              <S.P
                onClick={() => {
                  setDropDownGender('여성');
                  props.setFilter('F');
                  props.setFilterCate('gender');
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
