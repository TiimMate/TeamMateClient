import * as S from './UnitBoardRow.style';
import notice from '../../../assets/icon_notice.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';

export default function UnitBoardRow({ id, unitBoard }) {
  const { category, title, date } = unitBoard;

  return (
    <S.Wrapper>
      {category === 'notice' ? (
        <S.Icon>
          <img src={notice} alt='notice' />
        </S.Icon>
      ) : category === 'bookmark' ? (
        <S.Icon>
          <img src={yesBookmark} alt='yesBookmark' />
        </S.Icon>
      ) : (
        <S.Icon>
          <img src={noBookmark} alt='noBookmark' />
        </S.Icon>
      )}
      <S.Title to={`/community/detail/${id}`}>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.Wrapper>
  );
}
