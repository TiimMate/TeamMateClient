import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  padding: 11px 20px;
`;

export const NavItem = styled.a`
  padding: 5px;
  color: var(--blue-400, #0075ff);
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

export const Banner = styled.div`
  background: var(--blue-600, #2e69ff);
  height: 160px;
`;
