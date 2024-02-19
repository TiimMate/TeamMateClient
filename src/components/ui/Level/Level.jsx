import * as S from './Level.style';

function Level({ skill, manner, who = '팀' }) {
  return (
    <S.Wrapper>
      <S.levelDiv>
        <S.levelSpan>{who}의 실력레벨</S.levelSpan>
        <S.levelGauge>LV {skill || '0'}</S.levelGauge>
      </S.levelDiv>
      <S.levelDiv>
        <S.levelSpan>{who}의 메너레벨</S.levelSpan>
        <S.levelGauge>LV {manner || '0'}</S.levelGauge>
      </S.levelDiv>
    </S.Wrapper>
  );
}

export default Level;
