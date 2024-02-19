import { forwardRef, useEffect, useState } from 'react';
import * as S from './UnitBoardRow.style';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import { Unix_timestampConv, timeStamp } from '../../../utils/timeStamp';
import authInstance from '../../../services/authInstance';

const UnitBoardRow = forwardRef(({ id, bookmark, title, date }, ref) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  const renderIcon = () => {
    return isBookmarked ? (
      <img src={yesBookmark} alt='yesBookmark' />
    ) : (
      <img src={noBookmark} alt='noBookmark' />
    );
  };

  const handleBookmark = async () => {
    try {
      const response = await authInstance.post(`/posts/${id}/bookmark`);
      console.log(response);
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderIcon();
  }, [isBookmarked]);

  const tempDate = new Date(date);
  const printDate = timeStamp(Unix_timestampConv(tempDate.getTime()));

  return (
    <S.Wrapper ref={ref}>
      <button onClick={handleBookmark}>{renderIcon()}</button>
      <S.Title to={`/community/${id}/detail`}>{title}</S.Title>
      <S.Date>{printDate}</S.Date>
    </S.Wrapper>
  );
});

export default UnitBoardRow;
