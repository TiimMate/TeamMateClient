import styled from 'styled-components';

export const GymContentBody = styled.section`
  padding-top: 8px;
  width: 100%;
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

  padding: 11px 0;
  width: 100%;
  height: 40px;

  border-radius: 6px;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: #fff;
`;

export const SearchMessage = styled.div`
  display: flex;
  gap: 4px;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.6px;
`;

export const Map = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-bottom: 100%;
`;
