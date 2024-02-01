import React, { useEffect } from 'react';

import * as S from './Toast.style';

export default function Toast({ setToastState, message }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastState(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.ToastBackdrop>
      <S.ToastContainer
        onClick={(e) => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <S.ToastHeader>{message}</S.ToastHeader>
      </S.ToastContainer>
    </S.ToastBackdrop>
  );
}
