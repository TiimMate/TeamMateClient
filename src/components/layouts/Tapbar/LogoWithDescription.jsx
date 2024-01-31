import styled from 'styled-components';

function LogoWithDescription({ selected, description, icon, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Icon src={icon} alt='button' />
      <Description $selected={selected}>{description}</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
`;

const Icon = styled.img`
  width: 1.25rem;
  height: 1.1875rem;
  flex-shrink: 0;
`;

const Description = styled.span`
  color: ${(props) =>
    props.$selected ? 'var(--Blue300, #0075ff)' : 'var(--Gray300, #636363)'};

  /* 10pt */
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 180% */
  letter-spacing: -0.03125rem;
`;

export default LogoWithDescription;
