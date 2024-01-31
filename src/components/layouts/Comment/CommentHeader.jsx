import * as S from './CommentHeader.style';
import comment from '../../../assets/icon_comment.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';

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
        <S.BookMark>
          {
            // 사용자의 해당 postId 게시글 저장여부에 따라 아이콘,문구 변경
            <>
              <img src={noBookmark} alt='noBookmark' />
              <S.BookMarkGuide>글 저장하기</S.BookMarkGuide>
            </>
          }
        </S.BookMark>
      </S.HeaderContainer>
    </S.Wrapper>
  );
}
