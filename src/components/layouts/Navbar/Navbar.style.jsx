import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 50px; /* 수정되면 App screen padding 수정해주기 */
  flex-shrink: 0;

  background-color: #fff;
  border-bottom: 1px solid var(--Gray200, #d9d9d9);

  z-index: 99;
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
export const MenuIcon = styled.img`
  flex-shrink: 0;

  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
`;
export const LogoIcon = styled.img`
  flex-shrink: 0;

  width: 1.5rem;
  height: 1.5rem;
`;
export const SearchIcon = styled.img`
  flex-shrink: 0;

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;
