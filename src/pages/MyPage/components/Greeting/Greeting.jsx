import * as S from './Greeting.style';
import My48 from '../../../../assets/my48.svg';

function Greeting({ nickname, src }) {
  return (
    <S.Wrapper>
      <S.Hello>
        안녕하세요,
        <br />
        <S.Strong>{nickname} 메이트</S.Strong>님!
      </S.Hello>
      <S.Logo $logoUrl={src}>
        {!src && <S.Person src={My48} alt='my48' />}{' '}
      </S.Logo>
    </S.Wrapper>
  );
}

export default Greeting;
