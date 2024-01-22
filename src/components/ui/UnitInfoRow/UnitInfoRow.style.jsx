import styled from 'styled-components';
import CircleLogo from '../../atoms/CircleLogo';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 4.375rem;
  box-sizing: border-box;

  background: #fff;
`;

// Avatar Section
export const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 4.44%;
  margin-right: 4.72%;
`;
export const Avatar = styled(CircleLogo)`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;

  border-radius: 50%;

  background-color: #d9d9d9;
`;

// Text Section
export const TextSection = styled.div``;
export const Title = styled.h3`
  color: var(--kakao-logo, #000);

  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem; //#TODO
  font-style: normal;
  font-weight: 500; // #TODO
  letter-spacing: -0.0375rem;
`;
export const Date = styled.span`
  color: var(--Blue300, var(--kakao-logo, #0075ff));
  font-family: Pretendard;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  letter-spacing: -0.025rem;
`;
export const Description = styled.p`
  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  letter-spacing: -0.025rem;
`;
// Without Date
export const TitleWithoutDate = styled(Title)`
  color: black;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;
export const DescriptionWithoutDate = styled(Description)`
  color: #636363;
  font-size: 10px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;

// Button Section
export const BtnSection = styled.div`
  position: absolute;
  right: 4.44%;
`;
export const Button = styled.button`
  display: flex;

  height: 1.875rem;

  padding: 0.25rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 0.375rem;
  background: var(--Blue300, #0075ff);

  color: var(--white, #fff);
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
  cursor: pointer;

  &:disabled {
    color: var(--Blue300, #0075ff);
    background: var(--Blue200, #bddbff);
    cursor: default;
  }
`;
