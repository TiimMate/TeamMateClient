import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useTeamInfo from '../../../hooks/useTeamInfo';
import withAuth from '../../../hooks/hoc/withAuth';

import authInstance from '../../../services/authInstance';

import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import TeamGenderSelector from '../../../components/ui/Selector/Gender/TeamGenderSelector';
import TeamAgeSelector from '../../../components/ui/Selector/Age/TeamAgeSelector';
import LocationSelector from '../../../components/ui/Selector/Location/LocationSelector';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import Gap from '../../../components/atoms/Gap';

import * as S from './TeamCreatePage.style';
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

  const [members, setMembers] = useState([
    {
      id,
      unitInfo: {
        title: nickname,
        description: '정보를 입력해주세요.', // #TODO: FETCH DATA
        avatarUrl: null,
      },
      btnText: '팀장',
    },
  ]);

  const onClickSaveBtn = async (e) => {
    e.preventDefault();

    const logo = await uploadImage(srcImg);

    let sex = '';
    for (let i = 0; i < gender.length; i++) {
      if (gender[i]) {
        if (i === 0) sex = 'F';
        else if (i === 1) sex = 'M';
        else sex = 'MX';
        break;
      }
    }
    console.log(sex);

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
      logo: logo || '',
      name,
      description,
      gender: sex,
      ageGroup: age,
      region,
      gymName,
      category: sport,
    };

    try {
      await authInstance.post('/teams', body);
      navigate('/team');
    } catch (error) {
      if (error.response.status === 400)
        alert('필요한 정보를 모두 입력해주세요.');
      else alert('서버 오류. 잠시 후 다시 시도해주세요.');
    }
  };

  // #TODO: sport integrity check
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { avatarUrl, nickname, height, position } = (
          await authInstance.get(`/users/${id}/profiles/${sport}`)
        ).data.result;
        console.log(height, position);
        setMembers([
          {
            id,
            unitInfo: {
              title: nickname,
              avatarUrl,
              description:
                position && height ? `${height}cm|${position}` : null,
            },
            btnText: '팀장',
          },
        ]);
      } catch (error) {
        alert('서버 오류. 다시 접속 바랍니다.');
        navigate('/');
      }
    };
    fetchMe();
  }, [id, sport, navigate]);

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
        <MemberRows members={members} />
      </S.TeamMembersSection>

      <Gap height='7.19rem'>
        <S.SaveButton onClick={onClickSaveBtn}>저장하기</S.SaveButton>
      </Gap>
    </S.Wrapper>
  );
}

export default withAuth(TeamCreatePage);
