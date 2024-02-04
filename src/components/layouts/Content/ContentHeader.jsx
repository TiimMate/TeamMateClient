import * as S from './ContentHeader.style';
import pencil from '../../../assets/icon_pencil_gray.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback, useState } from 'react';

export default function ContentHeader({
  needButton,
  postCategory,
  postId,
  title,
  bookmark,
}) {
  const [isMe, setIsMe] = useState(true);
  const navigate = useNavigate();

  const handleIconButton = () => {
    if (postCategory === 'location') {
      navigate(`/location/${postId}/update`);
    }
    if (postCategory === 'community') {
      // api 통신 결과 해당 postId에 대해 작성자 본인여부에 따라 수정or북마크,
      // 사용자북마크여부에 따라 true, false 값 변경
    }
  };

  const renderIconButton = (postCategory, bookmark) => {
    // 작성자 본인일 경우
    if (isMe === true) {
      return (
        <>
          <img src={pencil} alt='pencil' />
          <S.IconGuide>글 수정하기</S.IconGuide>
        </>
      );
    }
    // 작성자 본인이 아닐 경우
    if (isMe === false) {
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
    }
  };

  return (
    <S.ContentHeader>
      <S.Title>{title}</S.Title>
      {needButton && (
        <S.IconButton onClick={() => handleIconButton()}>
          {renderIconButton(postCategory, bookmark)}
        </S.IconButton>
      )}
    </S.ContentHeader>
  );
}
