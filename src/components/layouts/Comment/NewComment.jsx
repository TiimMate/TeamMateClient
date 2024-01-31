import * as S from './NewComment.style';
import TextArea from '../TextArea';

export default function NewComment() {
  return (
    <S.Wrapper>
      <S.NewCommentContainer>
        <S.NewCommentHeader>댓글 작성하기</S.NewCommentHeader>
        <TextArea rows={6} />
        <S.NewCommentButton>작성하기</S.NewCommentButton>
      </S.NewCommentContainer>
    </S.Wrapper>
  );
}
