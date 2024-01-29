import styled from 'styled-components';
import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Header = styled.h3`
  align-items: center;
  padding: 0.75rem 0.75rem 0.8125rem 1.875rem;
  border-bottom: 0.0625rem solid var(--Gray200, #d9d9d9);
  color: var(--kakao-logo, #000);

  /* 14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 178.571% */
  letter-spacing: -0.0437rem;
`;
export const PostContainer = styled.section`
  padding: 0.625rem 1.875rem;
`;
export const Label = styled.label`
  color: var(--Gray300, #636363);
  margin-bottom: 0rem;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
`;
export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem 0.5rem;
  align-items: center;
  align-content: center;
  margin: 0.3125rem 0 1.25rem 0;
  width: 100%;
  gap: 0.625rem;
  flex-wrap: wrap;
  border-radius: 0.375rem;
  border: 0.0625rem solid var(--Gray200, #d9d9d9);
  background: #fff;

  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;

export const TitleInput = styled(Input)`
  color: var(--Gray300, #636363);
`;
export const ContentsTextarea = styled.textarea`
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  margin: 0.3125rem 0 1.25rem 0;
  width: 100%;
  padding: 0.625rem 0.5rem;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid var(--Gray200, #d9d9d9);
  background: #fff;

  color: var(--Gray300, #636363);

  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;
export const LinkInput = styled(Input)`
  color: var(--Gray200, #d9d9d9);
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
  border: 0.0625rem solid var(--Gray200, #d9d9d9);
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
  border: 0.0625rem solid var(--Gray200, #d9d9d9);
`;

export const SaveButton = styled(Button300)`
  width: 100%;
  height: 2.8125rem;
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

export const ModalButtonChild = styled.button`
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

export const GoNavigateButton = styled(ModalButtonChild)`
  margin-right: auto;
  background: var(--Gray200, #d9d9d9);
`;

export const GoWriteButton = styled(ModalButtonChild)`
  margin-left: auto;
  background: var(--Blue300, #0075ff);
`;
