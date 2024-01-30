import { useNavigate } from 'react-router-dom';

import ClickableRow from '../components/ClickableRow';
import Greeting from '../components/Greeting/Greeting';
import UserDetailInfo from '../../../components/layouts/UserDetailInfo/UserDetailInfo';
import ButtonDiv from '../components/ButtonDiv';

import * as S from './MyPage.style';

const MY_INFO = {
  name: '조예원',
  age: '20대',
  gender: '여성',
  address: '강동구',
  position: '미드필더',
};

function MyPage() {
  const navigate = useNavigate();
  const myInfo = MY_INFO;
  return (
    <S.Wrapper>
      <Greeting userInfo={myInfo} />
      {/* 선수 정보 */}
      {/* 종목 선택 */}
      {/* 실력 레벨 */}
      <UserDetailInfo userInfo={myInfo} />

      {/* 내 소개 */}

      <ButtonDiv>수정하기</ButtonDiv>

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
