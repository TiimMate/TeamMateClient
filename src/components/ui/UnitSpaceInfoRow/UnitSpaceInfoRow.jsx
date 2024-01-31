import * as S from './UnitSpaceInfoRow.style';

export default function UnitSpaceInfoRow({ id, unitLocation }) {
  const { title } = unitLocation;

  return (
    <S.Wrapper to={`/location/detail/${id}`}>
      <S.Title>{title}</S.Title>
      <S.ApplyButton>모집 중</S.ApplyButton>
    </S.Wrapper>
  );
}
