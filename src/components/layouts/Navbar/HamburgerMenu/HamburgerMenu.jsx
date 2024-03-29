import { useState } from 'react';
import * as S from './HamburgerMenu.style';
import {
  convertCategoryToUrl,
  convertSportToUrl,
} from '../../../../utils/convertDataToUrl';
import { useNavigate } from 'react-router-dom';

const SPORTS = [
  '축구',
  '풋살',
  '농구',
  '배구',
  '야구',
  '탁구',
  '볼링',
  '배드민턴',
  '테니스',
];
const CATEGORIES = ['게스트', '연습경기', '대관정보', '커뮤니티'];

function HamburgerMenu({ setToggle }) {
  const navigate = useNavigate();
  const [sportIdx, setSportIdx] = useState(0);

  const handleClickCategoryBtn = (e) => {
    e.stopPropagation();

    const sportUrl = convertSportToUrl(SPORTS[sportIdx]);
    const categoryUrl = convertCategoryToUrl(e.target.textContent);

    if (!!sportUrl && !!categoryUrl) {
      if (categoryUrl === '/community' || categoryUrl === '/location') {
        navigate(categoryUrl);
      } else {
        navigate(sportUrl + categoryUrl);
      }
      setToggle(false);
      return;
    }
  };

  // #TODO: api 나오면 key 바꾸기
  return (
    <S.Wrapper onClick={() => setToggle(false)}>
      <S.EventContainer>
        {SPORTS.map((event, idx) => (
          <S.Event
            $isActivated={sportIdx === idx}
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setSportIdx(idx);
            }}
          >
            {event}
          </S.Event>
        ))}
      </S.EventContainer>
      <S.CategoryContainer>
        {CATEGORIES.map((category, idx) => (
          <S.Category key={idx} onClick={handleClickCategoryBtn}>
            {category}
          </S.Category>
        ))}
      </S.CategoryContainer>
    </S.Wrapper>
  );
}

export default HamburgerMenu;
