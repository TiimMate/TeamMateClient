import { useState } from 'react';

import SportSelect from '../../../components/ui/SportSelect/SportSelect';
import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import Gap from '../../../components/atoms/Gap';

import * as S from './MyUpdatePage.style';
import AgeSelector from '../../../components/layouts/Selector/Age/TeamAgeSelector';
import GenderSelector from '../../../components/layouts/Selector/Gender/GenderSelector';
import LocationSelector from '../../../components/layouts/Selector/Location/LocationSelector';
import PositionSelector from '../../../components/layouts/Selector/Position/PositionSelector';
import HeightSelector from '../../../components/layouts/Selector/Height/HeightSelector';
import ButtonDiv from '../components/ButtonDiv';

function MyUpdate() {
  const [sport, setSport] = useState();
  const [genderSelect, setGenderSelect] = useState(new Array(3).fill(false));
  const [ageSelect, setAgeSelect] = useState(new Array(5).fill(false));

  return (
    <S.Wrapper>
      <SportSelect sport={sport} setSport={setSport} disabled={true} />
      <Gap />
      <LogoUploader />

      <S.NameSection>
        <S.Label>
          이름(닉네임)<S.Star>*</S.Star>
        </S.Label>
        <S.NameInput />

        <S.Label>내 소개</S.Label>
        <S.TextArea spellCheck='false' />
      </S.NameSection>
      <Gap />

      <S.DetailSection>
        <GenderSelector selected={genderSelect} setSelected={setGenderSelect} />
        <AgeSelector selected={ageSelect} setSelected={setAgeSelect} />
        <LocationSelector />
        <HeightSelector />
        <PositionSelector />
      </S.DetailSection>

      <ButtonDiv>저장하기</ButtonDiv>
    </S.Wrapper>
  );
}

export default MyUpdate;
