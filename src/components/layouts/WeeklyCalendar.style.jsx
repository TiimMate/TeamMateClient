import styled from 'styled-components';

export const P = styled.p`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 6px;
  color: ${(props) => props.color || 'black'};
  background: ${(props) => props.back};
  width: fit-content;
  white-space: pre-line;
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500; /* 글자가 너무 두꺼워보여서 700 -> 500으로 수정했어요*/
  line-height: 18px; /* 150% */
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
  width: 14.2%;
  height: 70px;
  color: ${(props) => props.color || 'black'};
  background: ${(props) => props.back};
`;

export const Main = styled.div`
  width: 100%;
`;

export const Wrapper = styled.nav`
  height: 70px;
  overflow: hidden;
  background: var(--White, #fff);
`;
