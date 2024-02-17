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
  //const [lastPostId, setLastPostId] = useState(null);
  // const [postRow, setPostRow] = useState({
  //   title: '',
  //   createdAt: '',
  // });
  const [hasMorePosts, setHasMorePosts] = useState(false);

  let timeInterver = '';

  const handleNewPost = () => {
    navigate('/community/write');
  };

  // useEffect(() => {
  //   const getTeams = async () => {
  //     try {
  //       const response = await authInstance.get(`/teams?category=${sport}`);
  //       const { result } = response.data;
  //       setTeamInfo([...result]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getTeams();
  // }, [sport]);

  const getCommunityList = async () => {
    try {
      const response = await authInstance.get('/posts/community');
      //`/posts/community/?cursorId=${lastPostId}`
      //'/posts/community'
      console.log(response);
      const { result } = response.data;

      console.log('result.posts', result.posts);
      console.log('result.hasNext', result.hasNext);

      setCommunityList([...result.posts]);
      setHasMorePosts(result.hasNext);

      console.log('communityList', communityList);
      //setLastPostId(communityList[communityList.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommunityList();
  }, []);

  const renderPost = () =>
    communityList.map(({ id, isBookmarked, title, createdAt }, idx) => {
      const lastPostId = idx === communityList.length - 1;

      console.log({ id, isBookmarked, title, createdAt }, idx);

      return (
        <UnitBoardRow
          key={id}
          id={id}
          category={isBookmarked}
          title={title}
          date={createdAt}
        />
      );
    });

  // function onScroll() {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight && hasMorePosts) {
  //     setPage(page + 1);
  //     console.log(page);
  //   }
  // }

  // const handleScroll = () => {
  //   clearTimeout(timeInterver);
  //   timeInterver = setTimeout(onScroll, 300);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

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
