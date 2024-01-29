import * as S from './UnitBoardRow.style';
import notice from '../../assets/icon_notice.svg';
import yesBookmark from '../../assets/icon_yes_bookmark.svg';
import noBookmark from '../../assets/icon_no_bookmark.svg';
import { useState } from 'react';
export default function UnitBoardRow({ unitBoard }) {
  const { category, title, date } = unitBoard;

  const iconList = {
    notice: notice,
    bookmark: yesBookmark,
    '': noBookmark,
  };

  const categoryIcon = (category) => {
    // var temp = category;
    // var icon = `icon_${category}.svg`;
    // var srcUrl = `../../assets/${icon}`;
    // var icon1 = iconList.category;
    // console.log(category);

    return (
      <S.Icon>
        <img src={yesBookmark} alt='yesBookmark' />
      </S.Icon>
    );
  };

  return (
    <S.Wrapper>
      {categoryIcon(category)}
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.Wrapper>
  );
}
