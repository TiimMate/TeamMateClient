import * as S from '../../layouts/NewPostButton.style';

import pencil from '../../../assets/icon_pencil_blue.svg';

//안에 글이 달라서 서연님거 복붙하고 style은 그대로 사용했습니당
export default function MatchWrite(props) {
  return (
    <S.Wrapper>
      <S.MessageContainer onClick={props.onClick}>
        <S.Icon>
          <img src={pencil} alt='pencil' />
        </S.Icon>
        <S.Message>{props.text}모집글을 작성해 보세요!</S.Message>
      </S.MessageContainer>
    </S.Wrapper>
  );
}
