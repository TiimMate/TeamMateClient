import * as S from './NewComment.style';
import TextArea from '../TextArea/TextArea';
import authInstance from '../../../services/authInstance';
import { useState, useEffect } from 'react';

export default function NewComment({ postId, fetchPostDetail }) {
  const [content, setContent] = useState('');
  const onSubmit = async () => {
    try {
      const response = await authInstance.post(`/posts/${postId}/comments`, {
        content,
      });
      console.log(response);
      await fetchPostDetail();
      setContent('');
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <S.Wrapper>
      <S.NewCommentContainer>
        <S.NewCommentHeader>댓글 작성하기</S.NewCommentHeader>
        <TextArea
          value={content}
          rows={6}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.NewCommentButton onClick={onSubmit}>작성하기</S.NewCommentButton>
      </S.NewCommentContainer>
    </S.Wrapper>
  );
}
