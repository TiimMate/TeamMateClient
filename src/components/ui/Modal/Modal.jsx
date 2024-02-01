import React from 'react';

import * as S from './Modal.style';

import xClose from '../../../assets/x-close.svg';

function Modal({ title, parent, children, onClose }) {
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContainer
        onClick={(e) => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <S.ModalHeader parent={parent}>
          <h2>{title}</h2>
          <S.CloseButton src={xClose} alt='close-btn' onClick={onClose} />
        </S.ModalHeader>
        {children}
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
}

// 모달 사용을 위한 exported components
export const { ModalContentWrapper, ModalButton, ModalButtonBlue, ModalInput } =
  S;

export default Modal;
