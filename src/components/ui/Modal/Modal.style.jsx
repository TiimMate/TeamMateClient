import styled from 'styled-components';

import Button300 from '../../atoms/Button300';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
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

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: '20px';

  color: var(--blue-400, #0075ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  line-height: 29px;
  letter-spacing: -0.8px;
`;

export const CloseButton = styled.img`
  cursor: pointer;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalButton = styled(Button300)`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 18.75rem;
  margin-bottom: 0.63rem;
  padding: 0 0.75rem;

  border-radius: 0.375rem;
  border: 1px solid var(--gray-200, #d9d9d9);

  background: var(--gray-100, #f0f0f0);

  color: var(--gray-300, #636363);
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.7px;
  white-space: nowrap;

  box-sizing: border-box;
`;
export const ModalButtonBlue = styled(ModalButton)`
  background: var(--blue-400, #0075ff);
  color: white;
`;

export const ModalInput = styled.input`
  display: flex;
  align-items: center;

  width: 17.25rem; // 18.75rem - padding-left * 2
  margin-bottom: 0.63rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-200, #d9d9d9);

  background: var(--gray-100, #f0f0f0);
`;
