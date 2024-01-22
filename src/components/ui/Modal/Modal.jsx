import React from 'react';
import styled from 'styled-components';

import Button300 from '../../atoms/Button300';
import * as S from './Modal.style';

function Modal({ title, children, onClose }) {
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContainer
        onClick={e => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <S.ModalHeader>
          <h2>{title}</h2>
          <S.CloseButton
            src='assets/x-close.svg'
            alt='close-btn'
            onClick={onClose}
          />
        </S.ModalHeader>
        {children}
      </S.ModalContainer>
    </S.ModalBackdrop>
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
  display: flex;
  justify-content: start;
  align-items: center;

  width: 18.75rem;
  margin-bottom: 0.63rem;
  padding: 0 0.75rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);

  background: var(--Gray100, #f0f0f0);

  color: var(--Gray300, #636363);
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.7px;
  white-space: nowrap;

  box-sizing: border-box;
`;
/** 파란색 버튼 */
export const ModalButtonBlue = styled(ModalButton)`
  background: #0075ff;
  color: white;
`;
/** Input, 무색 */
export const ModalInput = styled.input`
  display: flex;
  align-items: center;

  width: 17.25rem; // 18.75rem - padding-left * 2
  margin-bottom: 0.63rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);

  background: var(--Gray100, #f0f0f0);
`;

export default Modal;
