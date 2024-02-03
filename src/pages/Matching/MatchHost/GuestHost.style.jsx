import styled from 'styled-components';

export const Main = styled.div`
  box-sizing: border-box;

  width: 100%;

  background: var(--Gray100, #f0f0f0);
`;

export const Gap = styled.div`
  box-sizing: border-box;

  height: 60px;
  padding: 1.5rem 8.33%;

  background: var(--Gray100, #f0f0f0);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 161.111% */
  letter-spacing: -0.9px;
`;

export const MatchTimeSection = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: white;

  .swiper {
    .swiper-slide {
      width: auto !important;
      margin-right: 15px;
    }
  }
`;

export const GuestHostSection = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem 8.33%;

  background: white;
`;

export const Label = styled.label`
  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;
`;

export const HostCountSection = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 68px;
  margin: 8px 0px 20px 0px;
  border-radius: 6px;
  border: 1px solid var(--Gray100, #f0f0f0);
`;

export const HostCountInput = styled.input`
  width: 14px;
  border: 0cap;
  border-bottom: 1px solid var(--Gray300, #d9d9d9);

  color: var(--Gray200, #d9d9d9);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px; /* 140% */
  letter-spacing: -1.5px;
`;

export const TextArea = styled.textarea`
  width: calc(100% - 1.5rem);
  margin: 5px 0 30px 0;
  padding: 0.625rem 0.75rem;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);

  background: var(--Gray100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;

export const HostCountP = styled.p`
  width: 26px;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -1.5px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;
export const HostButton = styled.button`
  box-sizing: border-box;

  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
  width: 300px;
  height: 45px;
  padding: 11px 115px;
  margin: 29px 1rem 20px 1rem;
  border-radius: 6px;

  background: #0075ff;

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */

  flex-shrink: 0;
`;
