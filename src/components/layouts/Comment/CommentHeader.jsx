import * as S from './CommentHeader.style';
import comment from '../../../assets/icon_comment.svg';

export default function CommentHeader({ postId, commentCount }) {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.CountRows>
          <img src={comment} alt='comment' />
          <S.CountNumber>{commentCount}</S.CountNumber>
        </S.CountRows>
      </S.HeaderContainer>
    </S.Wrapper>
  );
}
