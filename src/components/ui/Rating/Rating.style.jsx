import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.span`
  color: var(--blue-500);
  font-size: 16px;
  font-weight: 600;
  line-height: 29px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: var(--blue-100);
`;

export const RatingButton = styled.button`
  display: flex;
`;

export const FireImg = styled.img`
  width: 24px;
  height: 33px;
`;
