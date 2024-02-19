import { forwardRef } from 'react';
import * as S from './UnitBoardRow.style';
import notice from '../../../assets/icon_notice.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import { Unix_timestampConv, timeStamp } from '../../../utils/timeStamp';

const UnitBoardRow = forwardRef(({ id, category, title, date }, ref) => {
  const renderIcon = (category) => {
    if (category === true) return <img src={yesBookmark} alt='bookmark' />;
    if (category === false) return <img src={noBookmark} alt='' />;
  };

  const tempDate = new Date(date);
  const printDate = timeStamp(Unix_timestampConv(tempDate.getTime()));

  return (
    <S.Wrapper ref={ref}>
      {renderIcon(category)}
      <S.Title to={`/community/${id}/detail`}>{title}</S.Title>
      <S.Date>{printDate}</S.Date>
    </S.Wrapper>
  );
});

export default UnitBoardRow;
