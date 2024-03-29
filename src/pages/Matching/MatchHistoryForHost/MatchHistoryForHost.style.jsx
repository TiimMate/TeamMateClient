import styled from 'styled-components';
import teammateBanner from '../../../assets/banner-teammate.png';

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
  color: ${(props) =>
    props.isActive ? 'var(--Blue300, #0075ff)' : 'var(--Gray200, #D9D9D9)'};
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

export const Banner = styled.div`
  background-image: url(${teammateBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 160px;
`;
