import { useEffect, useRef, useState } from 'react';
import Banner from '../../../components/atoms/Banner';
import withAuth from '../../../hooks/hoc/withAuth';
import NotPost from '../components/NotPost';

import * as S from './MyLocation.style';
import authInstance from '../../../services/authInstance';
import UnitBoardRow from '../../../components/ui/UnitBoardRow/UnitBoardRow';

function MyLocation() {
  const [page, setPage] = useState(1);

  const [communityList, setCommunityList] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(false);
  const [lastPostId, setLastPostId] = useState(null);

  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useEffect(() => {
    if (!bottom) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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

      // #TODO: Update uri
      if (lastPostId == null)
        response = await authInstance.get('/posts/bookmarks');
      else
        response = await authInstance.get(
          `/posts/bookmarks?cursorId=${lastPostId}`,
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

  console.log(communityList);

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

  return (
    <S.Wrapper>
      <Banner>
        <S.WhiteSpan>내 대관정보</S.WhiteSpan>
      </Banner>
      <S.HeaderContainer>
        <S.Title>제목</S.Title>
        <S.Date>상태</S.Date>
      </S.HeaderContainer>

      {communityList.length ? renderPost() : <NotPost title='대관 정보가' />}
    </S.Wrapper>
  );
}

export default withAuth(MyLocation);
