import * as S from './CommunityDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import ContentBody from '../../../components/layouts/Content/ContentBody';
import CommentHeader from '../../../components/layouts/Comment/CommentHeader';
import UnitCommentRow from '../../../components/ui/UnitCommentRow/UnitCommentRow';
import NewComment from '../../../components/layouts/Comment/NewComment';
import { useParams } from 'react-router';

import { contents, comments } from '../../../utils/postData';

export default function CommunityDetail() {
  const { id } = useParams();

  // api로 해당 id 게시글 정보 받아오기
  const content = contents[id - 1];
  console.log(content);

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
      <ContentHeader title={content.unitBoard.title} />
      <ContentBody content={content.unitBoard} />
      <CommentHeader postId={id}></CommentHeader>
      {renderComment()}
      <NewComment />
    </S.Wrapper>
  );
}
