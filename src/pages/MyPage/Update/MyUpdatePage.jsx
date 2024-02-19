import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
import withAuth from '../../../hooks/hoc/withAuth';
import authInstance from '../../../services/authInstance';
import { useSelector } from 'react-redux';
import useSrcImg from '../../../hooks/useSrcImg';
import { uploadImage } from '../../../services/imageApi';

function MyUpdate() {
  const { id } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [sport, setSport] = useState(searchParams.get('category'));
  const [myInfo, dispatch] = useMyInfo();
  const {
    avatarUrl,
    nickname,
    description,
    gender,
    ageGroup,
    region,
    height,
    position,
  } = myInfo;
  const [img, setImg] = useSrcImg(avatarUrl);

  const onClickSaveBtn = async (e) => {
    e.preventDefault();

    // #TODO: FETCH LOGO
    const avatarUrl = await uploadImage(img);

    let sex = '';
    for (let i = 0; i < gender.length; i++) {
      if (gender[i]) {
        if (i === 0) sex = 'M';
        else sex = 'F';
        break;
      }
    }

    let age = '';
    for (let i = 0; i < ageGroup.length; i++) {
      if (ageGroup[i]) {
        if (i === 0) age = '-10';
        else if (i === 1) age = '20-29';
        else if (i === 2) age = '30-39';
        else if (i === 3) age = '40-49';
        else age = '50-';
        break;
      }
    }
    const body = {
      avatarUrl,
      nickname,
      description,
      gender: sex,
      ageGroup: age,
      region,
      height: Number(height),
      position,
    };

    try {
      await authInstance.put(`/users/profiles/${sport}`, body);
      navigate('/my');
    } catch (error) {
      alert('서버 오류. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const { result } = (
          await authInstance.get(`/users/${id}/profiles/${sport}`)
        ).data;
        dispatch({ type: 'INIT', value: result });
      } catch (error) {}
    };
    fetchMyProfile();
  }, [id, navigate, dispatch, sport]);

  return (
    <S.Wrapper>
      <SportSelector sport={sport} setSport={setSport} disabled={true} />
      <Gap />
      <LogoUploader url={img} setUrl={setImg} />

      <S.NameSection>
        <S.Label>이름(닉네임)*</S.Label>
        <S.NameInput
          value={nickname}
          onChange={(e) =>
            dispatch({ type: 'NICKNAME', value: e.target.value })
          }
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
          selected={ageGroup}
          setSelected={(sel) => dispatch({ type: 'AGE_GROUP', value: sel })}
        />

        <LocationSelector
          location={region}
          setLocation={(sel) => dispatch({ type: 'REGION', value: sel })}
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

      <ButtonDiv onClick={onClickSaveBtn}>저장하기</ButtonDiv>
    </S.Wrapper>
  );
}

export default withAuth(MyUpdate);
