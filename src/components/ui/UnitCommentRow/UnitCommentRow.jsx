import * as S from './UnitCommentRow.style';

export default function UnitCommentRow({ unitComment }) {
  return (
    <S.Wrapper>
      <S.UserComment>
        <S.UserName>{unitComment.user}</S.UserName>
        <S.Comment>{unitComment.comment}</S.Comment>
      </S.UserComment>
      <S.Date>{unitComment.date}</S.Date>
    </S.Wrapper>
  );
}
