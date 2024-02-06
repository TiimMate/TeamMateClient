import { useState } from 'react';

import * as S from './SearchBar.style';

import searchIcon from '../../../../assets/search.png';

function SearchBar({ setToggle }) {
  const [query, setQuery] = useState('');
  return (
    <S.Wrapper onClick={() => setToggle(false)}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Input
          type='text'
          placeholder='팀명을 검색해보세요'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <S.SearchIcon alt='search' src={searchIcon} />
      </S.Container>
    </S.Wrapper>
  );
}

export default SearchBar;
