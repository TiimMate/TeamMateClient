import { useState, useEffect, useRef } from 'react';

import NewPost from '../../../components/layouts/NewPostButton';
import UnitBoardRow from '../../../components/ui/UnitBoardRow/UnitBoardRow';
import * as S from './CommunityList.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import { useNavigate } from 'react-router-dom';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';
//import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

function CommunityList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [communityList, setCommunityList] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(false);
  const [lastPostId, setLastPostId] = useState(null);
  //const { bottomObserver } = useIntersectionObserver({ setPage, page });
  //let timeInterver = '';

  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useEffect(() => {
    if (!bottom) return;
    console.log('발견!!');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('발견!!');
          setPage(page + 1);
        }
      },
      { threshold: 0.5 },
    );
    bottomObserver.current = observer;

    observer.observe(bottom);
    return () => {
      observer.unobserve(bottom);
    };
  }, [bottom]);

  const getCommunityList = async ({ lastPostId }) => {
    try {
      let response;

      if (lastPostId == null)
        response = await authInstance.get('/posts/community');
      else
        response = await authInstance.get(
          `/posts/community/?cursorId=${lastPostId}`,
        );

      console.log(response);
      const { result } = response.data;

      if (result.posts.length === 20 && result.hasNext) {
        result.posts.forEach((item, idx) => {
          if (idx === result.posts.length - 1) {
            setLastPostId(item.id);
          }
        });
      }
      setCommunityList(communityList.concat([...result.posts]));
      setHasMorePosts(result.hasNext);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommunityList({ lastPostId });
    // 처음 렌더링 될때 안나오는걸 어떻게 해결할 수 있을까요,,,
  }, []);

  useEffect(() => {
    getCommunityList({ lastPostId });
  }, [page]);

  const renderPost = () =>
    communityList.map(({ id, isBookmarked, title, createdAt }, idx) => {
      console.log({ id, isBookmarked, title, createdAt }, idx, lastPostId);
      console.log('hasMorePosts', hasMorePosts);
      console.log('lastPostId === id', lastPostId === id);

      if (lastPostId === id) {
        return (
          <>
            <UnitBoardRow
              key={id}
              id={id}
              category={isBookmarked}
              title={title}
              date={createdAt}
            />
            <div ref={setBottom} />
          </>
        );
      } else {
        return (
          <UnitBoardRow
            key={id}
            id={id}
            category={isBookmarked}
            title={title}
            date={createdAt}
          />
        );
      }
    });

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

      {renderPost()}
    </S.Wrapper>
  );
}

export default withAuth(CommunityList);
