import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid var(--Gray200, #d9d9d9);
  padding: 9px 30px 19px 38px;
  background: #fff;
  width: 100%;
`;

export const UserComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 74%;
`;

export const UserName = styled.div`
  width: 57px;
  color: var(--kakao-logo, #000);

  /* 10pt */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */
  letter-spacing: -0.5px;
`;

export const Comment = styled.div`
  color: var(--kakao-logo, #000);

  /* 12pt */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
`;

export const Date = styled.div`
  margin-left: auto;
  margin-top: auto;
  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 200% */
  letter-spacing: -0.45px;
`;
