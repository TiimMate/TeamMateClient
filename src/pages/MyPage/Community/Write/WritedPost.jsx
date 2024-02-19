import UnitBoardRow from '../../../../components/ui/UnitBoardRow/UnitBoardRow';
import Banner from '../../../../components/atoms/Banner';
import NotPost from '../../components/NotPost';

import * as S from './WritedPost.style';
import withAuth from '../../../../hooks/hoc/withAuth';
import { useEffect, useRef, useState } from 'react';
import authInstance from '../../../../services/authInstance';

function WritedPost() {
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

      if (lastPostId == null)
        response = await authInstance.get('/posts/authors/me');
      else
        response = await authInstance.get(
          `/posts/authors/me?cursorId=${lastPostId}`,
        );

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
    } catch (error) {}
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
        <S.WhiteSpan>내가 쓴 글</S.WhiteSpan>
      </Banner>
      <S.HeaderContainer>
        <S.Category>구분</S.Category>
        <S.Title>제목</S.Title>
        <S.Date>작성일시</S.Date>
      </S.HeaderContainer>

      {communityList.length ? renderPost() : <NotPost title='작성한 글이' />}
    </S.Wrapper>
  );
}

export default withAuth(WritedPost);
