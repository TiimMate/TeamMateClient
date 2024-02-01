import React from 'react';

import * as S from './Modal.style';

import xClose from '../../../assets/x-close.svg';

function Modal({ title, titleAlign = 'left', children, onClose }) {
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContainer
        onClick={(e) => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <S.ModalHeader>
          <S.ModalTitle titleAlign={titleAlign}>{title}</S.ModalTitle>
          <S.CloseButton type='button' onClick={onClose}>
            <img src={xClose} alt='닫기' />
          </S.CloseButton>
        </S.ModalHeader>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
}

// 모달 사용을 위한 exported components
export const { ModalContentWrapper, ModalButton, ModalButtonBlue, ModalInput } =
  S;

export default Modal;
