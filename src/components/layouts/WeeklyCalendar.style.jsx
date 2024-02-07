import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
`;

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  border-bottom: 1px solid var(--gray-200, #d9d9d9);
  height: 70px;
  background: white;
`;

export const IMG = styled.img`
  margin: -8px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
  width: 14.2%;
  height: 70px;
  background: ${(props) => props.back};
  color: ${(props) => props.color || 'black'};
`;

export const P = styled.p`
  width: fit-content;
  padding-top: 10px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
  border-radius: 6px;
  background: ${(props) => props.back};
  text-align: center;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 500; /* 글자가 너무 두꺼워보여서 700 -> 500으로 수정했어요*/
  line-height: 18px; /* 150% */
  color: ${(props) => props.color || 'black'};
  white-space: pre-line;
`;
