import styled from 'styled-components';

export const ReviewLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  gap: 14px;
`;

export const ReviewDescription = styled.div`
  line-height: 18px;
  letter-spacing: -0.6px;
  font-size: 12px;
  text-align: center;
  color: var(--Gray300, #636363);
`;

export const RatingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
