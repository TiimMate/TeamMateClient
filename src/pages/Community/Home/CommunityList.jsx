import NewPost from '../../../components/layouts/NewPostButton';
import UnitBoardRow from '../../../components/ui/UnitBoardRow/UnitBoardRow';
import * as S from './CommunityList.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';

import { communitycontents } from '../../../utils/postData';

import { useNavigate } from 'react-router-dom';

export default function CommunityList() {
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate('/community/write');
  };

  const renderPost = () =>
    communitycontents.map((content) => (
      <UnitBoardRow
        key={content.id}
        id={content.id}
        unitBoard={content.unitBoard}
      />
    ));

  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <NewPost onClick={handleNewPost} />

      <S.HeaderContainer>
        <S.Category>구분</S.Category>
        <S.Title>제목</S.Title>
        <S.Date>작성일시</S.Date>
      </S.HeaderContainer>

      {renderPost()}
    </S.Wrapper>
  );
}
