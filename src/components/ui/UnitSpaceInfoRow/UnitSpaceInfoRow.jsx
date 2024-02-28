import * as S from './UnitSpaceInfoRow.style';
import { forwardRef } from 'react';

const UnitSpaceInfoRow = forwardRef(({ id, title, status }, ref) => {
  return (
    <S.Wrapper ref={ref}>
      <S.Title to={`/location/${id}/detail`}>{title}</S.Title>
      {status ? (
        <S.ApplyButton>모집 중</S.ApplyButton>
      ) : (
        <S.ClosedButton>대관 마감</S.ClosedButton>
      )}
    </S.Wrapper>
  );
});

export default UnitSpaceInfoRow;
