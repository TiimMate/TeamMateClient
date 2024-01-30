import * as S from './UnitCommentRow.style';

export default function UnitCommentRow() {
  return (
    <S.Wrapper>
      <S.UserName>작성자 이름</S.UserName>
      <S.UserComment>
        <S.Comment>도움되는글이에여 굿굿</S.Comment>
        <S.Date>01/13 00:59</S.Date>
      </S.UserComment>
    </S.Wrapper>
  );
}
