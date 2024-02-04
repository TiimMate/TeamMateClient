import * as S from './CommentHeader.style';
import comment from '../../../assets/icon_comment.svg';

export default function CommentHeader({ postId }) {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.CountRows>
          <img src={comment} alt='comment' />
          {
            // 해당 postId 게시글의 댓글 개수에 따라 숫자 변경
            <S.CountNumber>3</S.CountNumber>
          }
        </S.CountRows>
      </S.HeaderContainer>
    </S.Wrapper>
  );
}
