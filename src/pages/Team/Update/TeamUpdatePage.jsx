import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useTeamInfo from '../../../hooks/useTeamInfo';
import withAuth from '../../../hooks/hoc/withAuth';

import authInstance from '../../../services/authInstance';

import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import TeamGenderSelector from '../../../components/ui/Selector/Gender/TeamGenderSelector';
import TeamAgeSelector from '../../../components/ui/Selector/Age/TeamAgeSelector';
import LocationSelector from '../../../components/ui/Selector/Location/LocationSelector';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import Gap from '../../../components/atoms/Gap';

import { formatMembers } from '../../../utils/formatData';

import * as S from './TeamUpdatePage.style';
import useSrcImg from '../../../hooks/useSrcImg';
import { uploadImage } from '../../../services/imageApi';

function TeamUpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teamInfo, dispatch] = useTeamInfo();
  const {
    logo,
    name,
    description,
    gender,
    ageGroup,
    region,
    gymName,
    participants: { leader, member },
  } = teamInfo;
  const [memberIdsToDelete, setMemberIdsToDelete] = useState([]);
  const [img, setImg] = useSrcImg(logo);

  const formattedMembers = formatMembers(leader, member, {
    formatBtnText: ({ isLeader }) => (!isLeader ? '삭제하기' : '팀장'),
    formatOnClickBtn: ({ isLeader, id }) =>
      !isLeader &&
      (() => {
        setMemberIdsToDelete((array) => [...array, id]);
        dispatch({ type: 'MEMBERS', value: id });
      }),
  });

  const onClickSaveBtn = async (e) => {
    e.preventDefault();
    if (!name || !gender || !ageGroup || !region || !gymName) {
      return alert('필요한 정보를 모두 입력해주세요.');
    }

    const logo = await uploadImage(img);

    let sex = '';
    for (let i = 0; i < gender.length; i++) {
      if (gender[i]) {
        if (i === 0) sex = 'F';
        else if (i === 1) sex = 'M';
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
        else age = '50-';
        break;
      }
    }
    const body = {
      logo: logo ? logo : '',
      name,
      description,
      gender: sex,
      ageGroup: age,
      region,
      gymName,
      memberIdsToDelete,
    };

    try {
      await authInstance.put(`/teams/${id}`, body);
      navigate('/team');
    } catch (error) {}
  };

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { result } = (await authInstance.get(`/teams/${id}`)).data;
        dispatch({ type: 'INIT', value: result });
      } catch (error) {
        navigate('/');
      }
    };
    fetchTeam();
  }, [id, navigate, dispatch]);

  return (
    <S.Wrapper>
      <LogoUploader url={img} setUrl={setImg} />
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

export default withAuth(TeamUpdatePage);
