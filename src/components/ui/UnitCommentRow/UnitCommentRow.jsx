import * as S from './UnitCommentRow.style';
import { Unix_timestampConv, timeStamp } from '../../../utils/timeStamp';

export default function UnitCommentRow({ nickname, content, createdAt }) {
  const tempDate = new Date(createdAt);
  const printDate = timeStamp(Unix_timestampConv(tempDate.getTime()));

  return (
    <S.Wrapper>
      <S.UserComment>
        <S.UserName>{nickname}</S.UserName>
        <S.Comment>{content}</S.Comment>
      </S.UserComment>
      <S.Date>{printDate}</S.Date>
    </S.Wrapper>
  );
}
