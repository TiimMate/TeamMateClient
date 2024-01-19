import styled from 'styled-components';

// 모달 배경 스타일
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경

  z-index: 100;
`;

// 모달 컨테이너 스타일
export const ModalContainer = styled.div`
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
export const ModalHeader = styled.div`
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
export const CloseButton = styled.img`
  cursor: pointer;
`;
