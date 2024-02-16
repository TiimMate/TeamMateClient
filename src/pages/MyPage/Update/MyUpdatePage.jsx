import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useMyInfo from '../../../hooks/useMyInfo';

import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import Gap from '../../../components/atoms/Gap';
import AgeSelector from '../../../components/ui/Selector/Age/AgeSelector';
import GenderSelector from '../../../components/ui/Selector/Gender/GenderSelector';
import LocationSelector from '../../../components/ui/Selector/Location/LocationSelector';
import PositionSelector from '../../../components/ui/Selector/Position/PositionSelector';
import HeightSelector from '../../../components/ui/Selector/Height/HeightSelector';
import ButtonDiv from '../components/ButtonDiv';

import * as S from './MyUpdatePage.style';

function MyUpdate() {
  const [searchParams] = useSearchParams();
  const [sport, setSport] = useState(searchParams.get('sport'));
  const [myInfo, dispatch] = useMyInfo();
  const {
    logoUrl,
    name,
    description,
    gender,
    age,
    location,
    height,
    position,
  } = myInfo;

  return (
    <S.Wrapper>
      <SportSelector sport={sport} setSport={setSport} disabled={true} />
      <Gap />
      <LogoUploader
        url={logoUrl}
        setUrl={(url) => dispatch({ type: 'LOGO', value: url })}
      />

      <S.NameSection>
        <S.Label>이름(닉네임)*</S.Label>
        <S.NameInput
          value={name}
          onChange={(e) => dispatch({ type: 'NAME', value: e.target.value })}
        />

        <S.Label>내 소개</S.Label>
        <S.TextArea
          value={description}
          onChange={(e) =>
            dispatch({ type: 'DESCRIPTION', value: e.target.value })
          }
          spellCheck='false'
        />
      </S.NameSection>
      <Gap />

      <S.DetailSection>
        <GenderSelector
          selected={gender}
          setSelected={(sel) => dispatch({ type: 'GENDER', value: sel })}
        />

        <AgeSelector
          selected={age}
          setSelected={(sel) => dispatch({ type: 'AGE', value: sel })}
        />

        <LocationSelector
          location={location}
          setLocation={(sel) => dispatch({ type: 'LOCATION', value: sel })}
        />
        <HeightSelector
          height={height}
          setHeight={(sel) => dispatch({ type: 'HEIGHT', value: sel })}
        />

        <PositionSelector
          position={position}
          setPosition={(sel) => dispatch({ type: 'POSITION', value: sel })}
        />
      </S.DetailSection>

      <ButtonDiv onClick={() => console.log(myInfo)}>저장하기</ButtonDiv>
    </S.Wrapper>
  );
}

export default MyUpdate;
