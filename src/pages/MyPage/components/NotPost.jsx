import styled from 'styled-components';
import Gap from '../../../components/atoms/Gap';

export default function NotPost({ title }) {
  return (
    <Gap height='30rem'>
      <Span>아직 {title} 없어요!</Span>
    </Gap>
  );
}

export const Span = styled.span`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  color: var(--Gray300, #636363);
  text-align: center;
  /* 16 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8125rem; /* 181.25% */
  letter-spacing: -0.05rem;
`;
