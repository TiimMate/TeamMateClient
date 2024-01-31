import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 100;
  bottom: 0;

  width: 100%;
  height: 4.375rem; /* 수정되면 App screen padding 수정해주기 */
  flex-shrink: 0;

  background: white;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  z-index: 97;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  background-color: #fff;
`;

export const Blank = styled.div`
  width: 1px;
`;
