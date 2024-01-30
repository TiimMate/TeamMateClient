import * as S from './UnitBoardRow.style';
import notice from '../../assets/icon_notice.svg';
import yesBookmark from '../../assets/icon_yes_bookmark.svg';
import noBookmark from '../../assets/icon_no_bookmark.svg';

export default function UnitBoardRow({ unitBoard }) {
  const { category, title, date } = unitBoard;

  const renderIcon = (category) => {
    if (category === 'notice') return <img src={notice} alt='notice' />;
    if (category === 'bookmark')
      return <img src={yesBookmark} alt='bookmark' />;
    if (category === '') return <img src={noBookmark} alt='' />;
  };

  return (
    <S.Wrapper>
      <S.Icon>{renderIcon(category)}</S.Icon>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.Wrapper>
  );
}
