import styled from 'styled-components';
import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ContentBody = styled.section`
  padding: 0.625rem 1.875rem;
`;

export const Label = styled.label`
  display: flex;
  color: var(--Gray300, #636363);
  margin-bottom: 0.3125rem;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const Image = styled.button`
  display: flex;
  width: 4.0625rem;
  height: 4.0625rem;
  margin: 0.875rem 0 1.875rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 0.0625rem solid var(--gray-200, #d9d9d9);
`;

export const NewImageList = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 5rem);
`;

export const NewImage = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
  margin-right: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: 0.0625rem solid var(--gray-200, #d9d9d9);
`;

export const GymContentBody = styled(ContentBody)`
  padding-top: 18px;
`;
export const GymName = styled.div`
  margin-bottom: 5px;
  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;
`;
export const SearchGym = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  padding: 11px;
  width: 100%;
  height: 40px;
  gap: 4px;

  border-radius: 6px;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: #fff;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.6px;
`;

export const ButtonWrapper = styled(ContentBody)`
  display: flex;
  justify-content: space-between;
`;

export const SaveButton = styled(Button300)`
  width: 46%;
`;
export const CompleteButton = styled(Button300)`
  background: var(--Gray300, #636363);
  width: 46%;
`;
export const ModalDescription = styled.p`
  margin-right: auto;
  color: var(--Gray400, #212121);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  letter-spacing: -0.7px;
`;

export const ModalButtonWrapper = styled.div`
  margin-top: 14px;
  display: flex;
`;

export const ModalChildButton = styled.button`
  display: block;
  margin: 0 auto;

  padding: 10px 14px;
  width: 133px;
  border-radius: 6px;
  border: none;

  color: var(--white, #fff);
  font-family: 'Pretendard';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.75px;
`;

export const GoNavigateButton = styled(ModalChildButton)`
  margin-right: auto;
  background: var(--Gray200, #d9d9d9);
`;

export const GoWriteButton = styled(ModalChildButton)`
  margin-left: auto;
  background: var(--Blue300, #0075ff);
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalCompleteWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 52px;
  padding: 12px 145px 11px 11px;
  align-items: center;
  border-radius: 12px;
  background: #fff;

  /* Drop Shadow */
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.25);
`;

export const ModalCompleteMsg = styled.h2`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px; /* 181.25% */
  letter-spacing: -0.8px;
`;
