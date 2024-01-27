import { useNavigate } from 'react-router-dom';

import * as S from './Navbar.style';

import menuIcon from '../../../assets/menu.svg';
import logo24Icon from '../../../assets/Logo24_.png';
import searchIcon from '../../../assets/search.png';

function Navbar() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuIcon src={menuIcon} alt='menu' />
        <S.LogoIcon src={logo24Icon} alt='logo' onClick={() => navigate('/')} />
        <S.SearchIcon src={searchIcon} alt='search' />
      </S.Container>
    </S.Wrapper>
  );
}

export default Navbar;
