import * as S from './ContentHeader.style';
import pencil from '../../../assets/icon_pencil_gray.svg';
import noBookmark from '../../../assets/icon_no_bookmark.svg';
import yesBookmark from '../../../assets/icon_yes_bookmark.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import authInstance from '../../../services/authInstance';

export default function ContentHeader({
  needButton,
  postCategory,
  postId,
  title,
  bookmark,
}) {
  const [isMe, setIsMe] = useState(false);
  const [icon, setIcon] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  const navigate = useNavigate();

  useEffect(() => {
    renderIconButton();
    setIsBookmarked(bookmark);
  }, [bookmark]);

  useEffect(() => {
    if (isMe === true) setIcon('revise');
    if (isMe === false) setIcon('bookmark');
  }, [isMe]);

  const handleIconButton = async () => {
    // api 통신 결과 해당 postId에 대해 작성자 본인여부에 따라 수정or북마크
    if (icon === 'revise') {
      navigate(`/${postCategory}/${postId}/update`);
    }
    if (icon === 'bookmark') {
      try {
        const response = await authInstance.post(`/posts/${postId}/bookmark`);
        setIsBookmarked(!isBookmarked);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderIconButton = (postCategory) => {
    if (isMe === true) {
      return (
        <>
          <img src={pencil} alt='pencil' />
          <S.IconGuide>글 수정하기</S.IconGuide>
        </>
      );
    }
    if (isMe === false) {
      return isBookmarked ? (
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
      {needButton && (
        <S.IconButton onClick={() => handleIconButton()}>
          {renderIconButton(postCategory, bookmark)}
        </S.IconButton>
      )}
    </S.ContentHeader>
  );
}
