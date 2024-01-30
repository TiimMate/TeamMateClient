import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--Gray100, #f0f0f0);
  background: var(--Blue100, #f4f9ff);
  border: none;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 0px 10px;
  gap: 10px;
`;

export const Icon = styled.div`
  flex: 1 0 0;
  height: 16px;
  border: none;
  background-color: transparent;
`;

export const Message = styled.h3`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 181.25% */
  letter-spacing: -0.8px;
`;
