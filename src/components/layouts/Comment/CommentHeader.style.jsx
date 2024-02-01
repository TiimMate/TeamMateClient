import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid var(--Gray200, #d9d9d9);
  padding: 5px 31px 5px 30px;
  background: #fff;
`;

export const CountRows = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  gap: 4px;
`;

export const CountNumber = styled.div`
  width: 8px;
  color: var(--Gray300, #636363);

  /* 12pt */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 10px;
  gap: 4px;
`;

export const IconGuide = styled.div`

  width: 52px;
  color: var(--Gray300, #636363);

  /* 12pt */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
`;
