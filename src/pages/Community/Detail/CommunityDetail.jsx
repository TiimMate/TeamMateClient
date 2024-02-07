import * as S from './CommunityDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import ContentBody from '../../../components/layouts/Content/ContentBody';
import CommentHeader from '../../../components/layouts/Comment/CommentHeader';
import UnitCommentRow from '../../../components/ui/UnitCommentRow/UnitCommentRow';
import NewComment from '../../../components/layouts/Comment/NewComment';
import { useParams } from 'react-router';

import { communitycontents, comments } from '../../../utils/postData';

export default function CommunityDetail() {
  const { id } = useParams();

  // api로 해당 id 게시글 정보 받아오기
  const content = communitycontents[id - 1];

  const renderComment = () =>
    comments.map((comment) => (
      <UnitCommentRow
        key={comment.id}
        id={comment.id}
        unitComment={comment.unitComment}
      />
    ));
  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <ContentHeader
        needButton={true}
        postCategory='community'
        postId={id}
        title={content.unitBoard.title}
        bookmark={content.unitBoard.bookmark}
      />
      <ContentBody menu='community' content={content.unitBoard} />
      <CommentHeader postId={id} />
      {renderComment()}
      <NewComment />
    </S.Wrapper>
  );
}
