import { useNavigate } from 'react-router-dom';
import * as S from './UnitSpaceInfoRow.style';

export default function UnitSpaceInfoRow({ id, unitLocation }) {
  const { title } = unitLocation;
  const navigate = useNavigate();
  const goMatchApply = () => {
    navigate(`/location/detail/${id}`);
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ApplyButton onClick={goMatchApply()}>모집 중</S.ApplyButton>
    </S.Wrapper>
  );
}
