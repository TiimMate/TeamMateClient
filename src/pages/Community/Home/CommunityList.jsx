import { useState, useEffect, useRef } from 'react';
import NewPost from '../../../components/layouts/NewPostButton';
import UnitBoardRow from '../../../components/ui/UnitBoardRow/UnitBoardRow';
import * as S from './CommunityList.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import { useNavigate } from 'react-router-dom';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';

function CommunityList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [communityList, setCommunityList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [lastPostId, setLastPostId] = useState(null);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMorePosts) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 },
    );
    bottomObserver.current = observer;

    if (bottom) observer.observe(bottom);

    return () => {
      if (bottom) observer.unobserve(bottom);
    };
  }, [bottom, loading, hasMorePosts]);

  useEffect(() => {
    const getCommunityList = async ({ lastPostId }) => {
      setLoading(true);
      try {
        let response;
        if (lastPostId == null)
          response = await authInstance.get('/posts/community');
        else
          response = await authInstance.get(
            `/posts/community/?cursorId=${lastPostId}`,
          );
        const { result } = response.data;
        console.log(result);

        if (result.posts.length > 0) {
          setCommunityList((prevList) => [...prevList, ...result.posts]);
          setLastPostId(result.posts[result.posts.length - 1].id);
        } else {
          setHasMorePosts(false);
        }
      } catch (error) {
        console.error('Error fetching community list:', error);
      } finally {
        setLoading(false);
      }
    };

    if (hasMorePosts) {
      getCommunityList({ lastPostId });
    }
  }, [page, hasMorePosts, lastPostId]);

  const handleNewPost = () => {
    navigate('/community/write');
  };

  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <NewPost onClick={handleNewPost} />
      <S.HeaderContainer>
        <S.Category>구분</S.Category>
        <S.Title>제목</S.Title>
        <S.Date>작성일시</S.Date>
      </S.HeaderContainer>
      {communityList.map(({ id, isBookmarked, title, createdAt }) => (
        <UnitBoardRow
          key={id}
          id={id}
          category={isBookmarked}
          title={title}
          date={createdAt}
        />
      ))}
      {loading && <S.Loading>Loading...</S.Loading>}
      <div ref={setBottom}></div>
    </S.Wrapper>
  );
}

export default withAuth(CommunityList);
