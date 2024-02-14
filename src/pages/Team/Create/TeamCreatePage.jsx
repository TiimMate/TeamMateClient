import useTeamInfo from '../../../hooks/useTeamInfo';
import { useSelector } from 'react-redux';

import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import TeamGenderSelector from '../../../components/ui/Selector/Gender/TeamGenderSelector';
import TeamAgeSelector from '../../../components/ui/Selector/Age/TeamAgeSelector';
import LocationSelector from '../../../components/ui/Selector/Location/LocationSelector';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import Gap from '../../../components/atoms/Gap';

import * as S from './TeamCreatePage.style';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';
import { uploadImage } from '../../../services/imageApi';

// #TODO: integrity check, if  error
function TeamCreatePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [teamInfo, dispatch] = useTeamInfo();
  const [sport, setSport] = useState(searchParams.get('category'));
  const { id, nickname } = useSelector((state) => state.user);
  const { srcImg, name, description, gender, ageGroup, region, gymName } =
    teamInfo;

  const formattedMembers = [
    {
      id,
      unitInfo: {
        title: nickname,
        description: '정보를 입력해주세요.', // #TODO: FETCH DATA
      },
      btnText: '팀장',
    },
  ];

  const onClickSaveBtn = async (e) => {
    e.preventDefault();

    // #TODO: FETCH LOGO
    const logo = await uploadImage(srcImg);
    console.log(logo);

    let sex = '';
    for (let i = 0; i < gender.length; i++) {
      if (gender[i]) {
        if (i === 0) sex = 'M';
        else if (i === 1) sex = 'F';
        else sex = 'MX';
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
        else sex = '50-';
        break;
      }
    }
    const body = {
      logo,
      name,
      description,
      gender: sex,
      ageGroup: age,
      region,
      gymName,
      category: sport,
    };

    try {
      const response = await authInstance.post('/teams', body);
      console.log(response);
      navigate('/team');
    } catch (error) {
      console.log(error);
    }
  };

  // #TODO: sport integrity check // kakao map 충돌 문제 해결
  useEffect(() => {
    if (!sport) {
      navigate('/');
    }
  }, [sport, navigate]);

  return (
    <S.Wrapper>
      <SportSelector sport={sport} setSport={setSport} disabled={true} />
      <LogoUploader
        url={srcImg}
        setUrl={(url) => dispatch({ type: 'SRC_IMG', value: url })}
      />
      <Gap />

      <S.TeamNameSection>
        <S.Label>팀 이름*</S.Label>
        <S.NameInput
          value={name}
          onChange={(e) => dispatch({ type: 'NAME', value: e.target.value })}
        />

        <S.Label>소개</S.Label>
        <S.TextArea
          value={description}
          onChange={(e) =>
            dispatch({ type: 'DESCRIPTION', value: e.target.value })
          }
          spellCheck='false'
        />
      </S.TeamNameSection>
      <Gap />

      <S.TeamDetailSection>
        <TeamGenderSelector
          selected={gender}
          setSelected={(sel) => dispatch({ type: 'GENDER', value: sel })}
        />

        <TeamAgeSelector
          selected={ageGroup}
          setSelected={(sel) => dispatch({ type: 'AGE_GROUP', value: sel })}
        />

        <LocationSelector
          location={region}
          setLocation={(sel) => dispatch({ type: 'REGION', value: sel })}
        />

        <GymSelector
          gym={gymName}
          setGym={(sel) => dispatch({ type: 'GYM_NAME', value: sel })}
        />
      </S.TeamDetailSection>

      <Gap height='3.81rem'>
        <S.Title>팀원 목록</S.Title>
      </Gap>
      <S.TeamMembersSection>
        <MemberRows members={formattedMembers} />
      </S.TeamMembersSection>

      <Gap height='7.19rem'>
        <S.SaveButton onClick={onClickSaveBtn}>저장하기</S.SaveButton>
      </Gap>
    </S.Wrapper>
  );
}

export default withAuth(TeamCreatePage);
