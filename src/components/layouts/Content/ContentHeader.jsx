import * as S from './ContentHeader.style';
import pencil from '../../../assets/icon_pencil_gray.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ContentHeader({
  postCategory,
  postId,
  title,
  bookmark,
}) {
  const [isMe, setIsMe] = useState(true);
  const [icon, setIcon] = useState('');
  const { nickname } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleIconButton = () => {
    if (icon === 'revise') {
      navigate(`/${postCategory}/${postId}/update`);
    }
    if (icon === 'bookmark') {
      navigate(`/${postCategory}/${postId}/update`);
    }
    // api 통신 결과 해당 postId에 대해 작성자 본인여부에 따라 수정or북마크,
    // 사용자북마크여부에 따라 true, false 값 변경
  };

  useEffect(() => {
    if (isMe === true) setIcon('revise');
    if (isMe === false) setIcon('bookmark');
  }, [isMe]);

  const renderIconButton = (postCategory, bookmark) => {
    if (isMe === true) {
      return (
        <>
          <img src={pencil} alt='pencil' />
          <S.IconGuide>글 수정하기</S.IconGuide>
        </>
      );
    }
    if (isMe === false) {
      if (postCategory === 'community')
        return bookmark === true ? (
          <>
            <img src={yesBookmark} alt='yesBookmark' />
            <S.IconGuide>저장 완료!</S.IconGuide>
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

      <S.IconButton onClick={() => handleIconButton()}>
        {renderIconButton(postCategory, bookmark)}
      </S.IconButton>
    </S.ContentHeader>
  );
}
