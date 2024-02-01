import * as S from './CommentHeader.style';
import comment from '../../../assets/icon_comment.svg';
import pencil from '../../../assets/icon_pencil_gray.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function CommentHeader({ postInfo, postId }) {
  const postCategory = postInfo.menu;
  const bookmark = postInfo.bookmark;

  const navigate = useNavigate();

  const handleIconButton = () => {
    if (postCategory === 'location') {
      navigate(`/location/${postId}/update`);
    }
    if (postCategory === 'community') {
      // api 통신 결과 해당 postId에 대한 사용자bookmark 여부에 따라 true, false 값 변경
    }
  };

  const renderIconButton = (postCategory, bookmark) => {
    if (postCategory === 'location')
      return (
        <>
          <img src={pencil} alt='pencil' />
          <S.IconGuide>글 수정하기</S.IconGuide>
        </>
      );
    if (postCategory === 'community')
      return bookmark === true ? (
        <>
          <img src={yesBookmark} alt='yesBookmark' />
          <S.IconGuide>글 저장하기</S.IconGuide>
        </>
      ) : (
        <>
          <img src={noBookmark} alt='noBookmark' />
          <S.IconGuide>글 저장하기</S.IconGuide>
        </>
      );
  };

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
        <S.IconButton onClick={() => handleIconButton()}>
          {renderIconButton(postCategory, bookmark)}
        </S.IconButton>

      </S.HeaderContainer>
    </S.Wrapper>
  );
}
