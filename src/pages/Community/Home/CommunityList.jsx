import { useState, useEffect } from 'react';
import NewPost from '../../../components/layouts/NewPostButton';
import UnitBoardRow from '../../../components/ui/UnitBoardRow/UnitBoardRow';
import * as S from './CommunityList.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import { communitycontents } from '../../../utils/postData';
import { useNavigate } from 'react-router-dom';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';

function CommunityList() {
  const navigate = useNavigate();
  const [communityList, setCommunityList] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPostId, setLastPostId] = useState();

  let timeInterver = '';

  const handleNewPost = () => {
    navigate('/community/write');
  };

  const getCommunityList = async () => {
    try {
      const response = await authInstance.get(
        `/posts/community/?cursorId=${lastPostId}`,
      );
      const { result } = response.data;
      setCommunityList([...result.posts]);

      console.log(communityList);

      //setLastPostId(communityList[communityList.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommunityList();
  }, [page]);

  const renderPost = () =>
    communityList.map((content, idx) => {
      console.log(idx);
      if (idx === communityList.length - 1) setLastPostId(content.id);
      return (
        <UnitBoardRow
          key={content.id}
          id={content.id}
          category={content.isBookmarked}
          title={content.title}
          date={content.createdAt}
        />
      );
    });

  function onScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  }

  const handleScroll = () => {
    clearTimeout(timeInterver);
    timeInterver = setTimeout(onScroll, 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

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

export default withAuth(CommunityList);
