import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ClickableRow from '../components/ClickableRow';
import Greeting from '../components/Greeting/Greeting';
import UserDetailInfo from '../../../components/ui/UserDetailInfo/UserDetailInfo';
import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import Level from '../../../components/ui/Level/Level';
import Gap from '../../../components/atoms/Gap';
import ButtonDiv from '../components/ButtonDiv';

import * as S from './MyPage.style';
import withAuth from '../../../hooks/hoc/withAuth';
import authInstance, { removeTokens } from '../../../services/authInstance';

function MyPage() {
  const navigate = useNavigate();
  const [sport, setSport] = useState('basketball');
  const [user, setUser] = useState({
    nickname: '',
    skillLevel: '0',
    mannerLevel: '0',
    gender: '',
    ageGroup: '',
    region: '',
    position: '',
    description: '',
  });

  const logout = async () => {
    try {
      await authInstance.post('/auth/logout');
    } catch (error) {
    } finally {
      removeTokens();
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { result } = (await authInstance.get(`/users/profiles/${sport}`))
          .data;
        setUser(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, [sport]);

  return (
    <S.Wrapper>
      <Greeting nickname={user.nickname} />
      <Gap height='3.75rem'>
        <S.H2>선수 정보</S.H2>
      </Gap>

      <SportSelector sport={sport} setSport={setSport} />

      <S.InfoContainer>
        <Level who='나' />
        <UserDetailInfo userInfo={user} />
      </S.InfoContainer>

      {user.description && (
        <S.IntroContainer>
          <S.Introduction>내 소개</S.Introduction>
          <S.IntroBox>{user.description}</S.IntroBox>
        </S.IntroContainer>
      )}

      <ButtonDiv onClick={() => navigate(`/my/update?sport=${sport}`)}>
        {user.gender ? '수정하기' : '입력하기'}
      </ButtonDiv>
      <Gap height='2.5rem' />

      {/* #TODO: 나중에 주소 바꾸기 */}
      <ClickableRow
        onClick={() => navigate('/my/community/write')}
        title='내가 쓴 글'
        isChevron={true}
      />
      <ClickableRow
        onClick={() => navigate('/my/community/save')}
        title='저장한 글'
        isChevron={true}
      />
      <ClickableRow
        onClick={() => navigate('/my/location')}
        title='대관정보'
        isChevron={true}
      />
      <ClickableRow onClick={logout} title='로그아웃' />
    </S.Wrapper>
  );
}

export default withAuth(MyPage);
