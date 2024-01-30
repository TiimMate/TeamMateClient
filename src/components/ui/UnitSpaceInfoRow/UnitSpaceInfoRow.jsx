import { useNavigate } from 'react-router-dom';
import * as S from './UnitSpaceInfoRow.style';
import Button70 from '../../atoms/Button70';

export default function UnitSpaceInfoRow() {
  const navigate = useNavigate();
  const goMatchApply = () => {
    navigate('/home');
  };

  return (
    <S.Wrapper>
      <S.SpaceName>하남시 청소년 수련관</S.SpaceName>
      <S.ButtonContainer>
        <Button70 onClick={goMatchApply}>모집 중</Button70>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
