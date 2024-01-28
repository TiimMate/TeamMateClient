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
const CATEGORIES = ['게스트', '연습경기', '커뮤니티', '대관정보'];

function HamburgerMenu({ setToggle }) {
  const navigate = useNavigate();
  const [sportIdx, setSportIdx] = useState(0);

  const handleClickCategoryBtn = (e) => {
    const sportUrl = convertSportToUrl(SPORTS[sportIdx]);
    const categoryUrl = convertCategoryToUrl(e.target.textContent);

    // 둘다 null이 아니면
    if (!!sportUrl && !!categoryUrl) {
      navigate(sportUrl + categoryUrl);
      setToggle(false);
    }
  };

  // #TODO: api 나오면 key 바꾸기
  return (
    <S.Wrapper>
      <S.EventContainer>
        {SPORTS.map((event, idx) => (
          <S.Event
            $isActivated={sportIdx === idx}
            key={idx}
            onClick={() => setSportIdx(idx)}
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
