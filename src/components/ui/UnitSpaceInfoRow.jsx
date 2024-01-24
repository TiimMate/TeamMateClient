import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button70 from '../atoms/Button70';

export default function UnitSpaceInfoRow() {
  const navigate = useNavigate();
  const goMatchApply = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <SpaceInfoItemContainer>
        <SpaceName>하남시 청소년 수련관</SpaceName>
        <ButtonContainer>
          <Button70 onClick={goMatchApply}>모집 중</Button70>
        </ButtonContainer>
      </SpaceInfoItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const SpaceInfoItemContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--Gray100, #f0f0f0);
  padding: 20px;
  background: #fff;
  align-items: center;
`;

const SpaceName = styled.div`
  margin-right: auto;
  color: var(--kakao-logo, #000);
  text-align: center;

  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;
