import * as S from './NewPostButton.style';

import pencil from '../../assets/icon_pencil_blue.svg';

export default function NewPost({ onClick }) {
  return (
    <S.Wrapper>
      <S.MessageContainer onClick={onClick}>
        <S.Icon>
          <img src={pencil} alt='pencil' />
        </S.Icon>
        <S.Message>새 글을 작성해 보세요!</S.Message>
      </S.MessageContainer>
    </S.Wrapper>
  );
}
