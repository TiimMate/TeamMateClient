import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ClickableRow from '../components/ClickableRow';
import Greeting from '../components/Greeting/Greeting';
import UserDetailInfo from '../../../components/ui/UserDetailInfo/UserDetailInfo';
import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import Level from '../../../components/ui/Level/Level';
import Gap from '../../../components/atoms/Gap';
import ButtonDiv from '../components/ButtonDiv';

import * as S from './MyPage.style';

const MY_INFO = {
  name: '조예원',
  age: '20대',
  gender: '여성',
  address: '강동구',
  position: '센터',
};

const MY_INFO2 = {
  name: '조예원',
  age: '20대',
  gender: '여성',
  address: '강남구',
  position: '몰라요',
};

function MyPage() {
  const navigate = useNavigate();
  const [sport, setSport] = useState('basketball');

  const myInfo = sport === 'basketball' ? MY_INFO : MY_INFO2;
  return (
    <S.Wrapper>
      <Greeting userInfo={myInfo} />
      <Gap height='3.75rem'>
        <S.H2>선수 정보</S.H2>
      </Gap>

      <SportSelector sport={sport} setSport={setSport} />

      <S.InfoContainer>
        <Level />
        <UserDetailInfo userInfo={myInfo} />
      </S.InfoContainer>

      <S.IntroContainer>
        <S.Introduction>내 소개</S.Introduction>
        <S.IntroBox>안녕하세요</S.IntroBox>
      </S.IntroContainer>

      <ButtonDiv onClick={() => navigate(`/my/update?sport=${sport}`)}>
        수정하기
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
        onClick={() => {
          /* logout() */
        }}
        title='로그아웃'
      />
    </S.Wrapper>
  );
}

export default MyPage;
