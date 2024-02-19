import * as S from './UnitCommentRow.style';

export default function UnitCommentRow({ nickname, content, createdAt }) {
  return (
    <S.Wrapper>
      <S.UserComment>
        <S.UserName>{nickname}</S.UserName>
        <S.Comment>{content}</S.Comment>
      </S.UserComment>
      <S.Date>{createdAt}</S.Date>
    </S.Wrapper>
  );
}
