import { useNavigate } from 'react-router-dom';
import * as S from './UnitSpaceInfoRow.style';
import Button70 from '../atoms/Button70';

export default function UnitSpaceInfoRow() {
  const navigate = useNavigate();
  const goMatchApply = () => {
    navigate('/home');
  };

  return (
    <S.SpaceInfoItemContainer>
      <S.SpaceTime>15:00</S.SpaceTime>
      <S.SpaceInfo>
        <S.SpaceName>체육관명</S.SpaceName>
        <S.MatchingInfo>남자|18명|3파전|중 레벨</S.MatchingInfo>
      </S.SpaceInfo>
      <S.ButtonContainer>
        <Button70 onClick={goMatchApply}>1명 모집</Button70>
      </S.ButtonContainer>
    </S.SpaceInfoItemContainer>
  );
}
