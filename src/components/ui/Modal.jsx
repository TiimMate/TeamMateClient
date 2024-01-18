import React from 'react';
import styled from 'styled-components';

import Button300 from '../atoms/Button300';

// Deafault styles
// 모달 배경 스타일
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경

  z-index: 100;
`;

// 모달 컨테이너 스타일
const ModalContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 288px; // 원하는 대로 조절
`;

// 모달 헤더 스타일
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; // 컨텐츠와의 간격

  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px; /* 181.25% */
  letter-spacing: -0.8px;
`;

// 닫기 버튼 스타일
const CloseButton = styled.img`
  cursor: pointer;
`;

function Modal({ title, children, onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer
        onClick={e => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton
            src='assets/x-close.svg'
            alt='close-btn'
            onClick={onClose}
          />
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalBackdrop>
  );
}

// 모달 사용을 위한 exported components
/** 컨텐츠 컨테이너(Body Wrapper) */
export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
/** 무색 버튼 */
export const ModalButton = styled(Button300)`
  color: var(--Gray300, #636363);
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.7px;
  white-space: nowrap;

  display: flex;
  justify-content: start;
  padding: 0 0.75rem;
  width: 18.75rem;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: var(--Gray100, #f0f0f0);
  box-sizing: border-box;

  margin-bottom: 0.63rem;
`;
/** 파란색 버튼 */
export const ModalButtonBlue = styled(ModalButton)`
  background: #0075ff;
  color: white;
`;
/** Input, 무색 */
export const ModalInput = styled.input`
  display: flex;
  width: 17.25rem; // 18.75rem - padding-left * 2
  padding: 0.625rem 0.75rem;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: var(--Gray100, #f0f0f0);
  margin-bottom: 0.63rem;
`;

export default Modal;
