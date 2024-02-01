import * as S from './Level.style';

function Level({ data, who = '팀' }) {
  return (
    <S.Wrapper>
      <S.levelDiv>
        <S.levelSpan>{who}의 실력레벨</S.levelSpan>
        <S.levelGauge>실력레벨</S.levelGauge>
      </S.levelDiv>
      <S.levelDiv>
        <S.levelSpan>{who}의 메너레벨</S.levelSpan>
        <S.levelGauge>메너레벨</S.levelGauge>
      </S.levelDiv>
    </S.Wrapper>
  );
}

export default Level;
