import * as S from '../NewPost.style';

import pencil from '../../../assets/icon_pencil.svg';

//안에 글이 달라서 서연님거 복붙하고 style은 그대로 사용했습니당
export default function MatchWrite({ onClick }) {
  return (
    <S.Wrapper>
      <S.MessageContainer onClick={onClick}>
        <S.Icon>
          <img src={pencil} alt='pencil' />
        </S.Icon>
        <S.Message>게스트 모집글을 작성해 보세요!</S.Message>
      </S.MessageContainer>
    </S.Wrapper>
  );
}
