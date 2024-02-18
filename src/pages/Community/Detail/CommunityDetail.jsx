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
import { downloadImage } from '../../../services/imageApi';
import withAuth from '../../../hooks/hoc/withAuth';
import Paging from '../../../components/ui/Paging/Paging';

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
  const [currentPageComments, setCurrentPageComments] = useState(
    communityDetail.comments,
  );
  const [firstCommentId, setFirstCommentId] = useState(1);
  const [page, setPage] = useState(1);

  const fetchPostDetail = async () => {
    // api명세서 변경 : imageUrls->link
    try {
      const { result } = (await authInstance.get(`/posts/${id}`)).data;

      console.log('result', result);
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

      console.log('result', result);

      if (result.comments.length > 0) {
        setCommunityDetail((prevDetail) => ({
          ...prevDetail,
          comments: [...prevDetail.comments, ...result.comments],
        }));
        setFirstCommentId(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [id]);

  useEffect(() => {
    fetchMoreComments();
  }, [firstCommentId]);

  const renderComment = () =>
    communityDetail.comments.map((comment) => (
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
      {renderComment()}
      <Paging
        page={page}
        count={communityDetail.commentCount}
        setPage={setPage}
      />
      <NewComment postId={id} fetchPostDetail={fetchPostDetail} />
    </S.Wrapper>
  );
}

export default withAuth(CommunityDetail);
