import * as S from './UnitSpaceInfoRow.style';
import { useSelector } from 'react-redux';

export default function UnitSpaceInfoRow({ id, title, content, status }) {
  const day = useSelector((state) => state.Day.value);
  console.log(day);

  return (
    <S.Wrapper to={`/location/${id}/detail`}>
      <S.Title>{title}</S.Title>
      {status ? (
        <S.ApplyButton>모집 중</S.ApplyButton>
      ) : (
        <S.ClosedButton>대관 마감</S.ClosedButton>
      )}
    </S.Wrapper>
  );
}
