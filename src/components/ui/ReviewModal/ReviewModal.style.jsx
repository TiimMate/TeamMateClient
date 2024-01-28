import styled from 'styled-components';

export const ReviewLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

// 순서 정렬
export const ReviewDescription = styled.div`
  line-height: 18px;
  letter-spacing: -0.6px;
  font-size: 12px;
  text-align: center;
  color: var(--Gray300, #636363);
`;

export const ReviewContainer = styled.div`
  gap: 10px;
`;

export const ReviewContent = styled.div`
  gap: 8px;
`;

export const ReviewTitle = styled.h2`
  line-height: 29px;
  letter-spacing: -0.8px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--Blue300, #0075ff);
`;

export const ReviewCheckbox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
  border-radius: 6px;
  background: var(--Blue100, #f4f9ff);
  padding: 10px 30px;
`;

export const ReviewCheck = styled.div``;
