import styled from 'styled-components';
import bannerImg from '../../../assets/banner-soccer.png';

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
  color: ${(props) => (props.isActive ? 'var(--blue-400)' : 'var(--gray-200)')};
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

export const Banner = styled.div`
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 160px;
`;
