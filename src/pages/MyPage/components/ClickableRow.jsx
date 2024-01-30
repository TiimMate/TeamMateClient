import styled from 'styled-components';
import ChevronRight from '../../../assets/chevron-right1.svg';

function ClickableRow({ title, onClick, isChevron }) {
  return (
    <Wrapper onClick={onClick}>
      <Title>{title}</Title>
      {isChevron && <Chevron src={ChevronRight} alt='chevron-right' />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  height: 50px;

  border-bottom: 1px solid var(--Gray200, #d9d9d9);
  background: var(--White, #fff);
`;

const Title = styled.h4`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12.5%;

  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 112.5% */
  letter-spacing: -0.05rem;
`;

const Chevron = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;

  width: 1.125rem;
  height: 1.125rem;
`;

export default ClickableRow;
