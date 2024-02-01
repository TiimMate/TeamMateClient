import styled from 'styled-components';

export const ToastBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  width: 288px;

  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  background-color: white;
`;

export const ToastHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;

  color: var(--blue-400, #0075ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  line-height: 29px;
  letter-spacing: -0.8px;
`;
