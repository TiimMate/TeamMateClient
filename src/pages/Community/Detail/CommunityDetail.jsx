import * as S from './CommunityDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import ContentBody from '../../../components/layouts/Content/ContentBody';
import CommentHeader from '../../../components/layouts/Comment/CommentHeader';
import UnitCommentRow from '../../../components/ui/UnitCommentRow/UnitCommentRow';
import NewComment from '../../../components/layouts/Comment/NewComment';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';
import Pagination from '../../../components/ui/Pagination/Pagination';

function CommunityDetail() {
  const { id } = useParams();

  const [communityDetail, setCommunityDetail] = useState({
    post: { title: '', content: '', link: '' },
    isBookmarked: false,
    commentCount: 0,
    comments: [
      {
        id: 0,
        nickname: '',
        content: '',
        createdAt: '',
      },
    ],
    commentHasNext: false,
  });

  const [firstCommentId, setFirstCommentId] = useState(1);
  const [hasMoreComments, setHasMoreComments] = useState(true);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fetchPostDetail = async () => {
    // api명세서 변경 : imageUrls->link
    try {
      const { result } = (await authInstance.get(`/posts/${id}`)).data;

      console.log('post result', result);
      setCommunityDetail({
        ...result,
        post: { ...result.post },
        comments: [...result.comments],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreComments = async () => {
    try {
      const { result } = (
        await authInstance.get(
          `/posts/${id}/comments?cursorId=${firstCommentId}`,
        )
      ).data;

      console.log('comment result', result);

      if (result.comments.length > 0) {
        setCommunityDetail((prevDetail) => ({
          ...prevDetail,
          comments: [...prevDetail.comments, ...result.comments],
        }));
        setFirstCommentId(result.comments[result.comments.length - 1].id);
      } else {
        setHasMoreComments(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [id]);

  useEffect(() => {
    if (communityDetail.comments.length > 0) {
      setFirstCommentId(communityDetail.comments[0].id);
    }
  }, [communityDetail]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (newPage % 2 === 0) fetchMoreComments();
  };

  const renderComments = () =>
    communityDetail.comments
      .slice(offset, offset + limit)
      .map((comment) => (
        <UnitCommentRow
          key={comment.id}
          id={comment.id}
          nickname={comment.nickname}
          content={comment.content}
          createdAt={comment.createdAt}
        />
      ));

  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <ContentHeader
        needButton={true}
        postCategory='community'
        postId={id}
        title={communityDetail.post.title}
        bookmark={communityDetail.isBookmarked}
      />
      <ContentBody menu='community' content={communityDetail.post} />
      <CommentHeader postId={id} commentCount={communityDetail.commentCount} />
      {renderComments()}
      <Pagination
        total={communityDetail.commentCount}
        limit={limit}
        page={page}
        setPage={handlePageChange}
      />
      <NewComment postId={id} fetchPostDetail={fetchPostDetail} />
    </S.Wrapper>
  );
}

export default withAuth(CommunityDetail);
