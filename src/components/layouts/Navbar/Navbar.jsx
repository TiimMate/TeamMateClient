import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Navbar.style';

import menuIcon from '../../../assets/menu.svg';
import logo24Icon from '../../../assets/Logo24_.png';
import searchIcon from '../../../assets/search.png';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import useOnLocationChange from '../../../hooks/useOnLocationChange';

function Navbar() {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);

  // url이 바뀌면 navbar 초기화
  useOnLocationChange(() => {
    setMenuToggle(false);
  });

  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuIcon
          src={menuIcon}
          alt='menu'
          onClick={() => setMenuToggle((toggle) => !toggle)}
        />

        <S.LogoIcon src={logo24Icon} alt='logo' onClick={() => navigate('/')} />

        <S.SearchIcon
          src={searchIcon}
          alt='search'
          onClick={() => navigate('/search')}
        />
      </S.Container>

      {/* Menu Toggle */}
      {menuToggle && <HamburgerMenu setToggle={setMenuToggle} />}
    </S.Wrapper>
  );
}

export default Navbar;
