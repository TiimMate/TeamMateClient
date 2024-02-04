import * as S from './LocationDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import ContentBody from '../../../components/layouts/Content/ContentBody';
import CommentHeader from '../../../components/layouts/Comment/CommentHeader';
import UnitCommentRow from '../../../components/ui/UnitCommentRow/UnitCommentRow';
import NewComment from '../../../components/layouts/Comment/NewComment';
import { useParams } from 'react-router';

import { locationcontents, comments } from '../../../utils/postData';

export default function LocationDetail() {
  const { id } = useParams();

  // api로 해당 id 게시글 정보 받아오기
  const content = locationcontents[id - 1];

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
        postCategory='location'
        postId={id}
        title={content.unitLocation.title}
      />
      <ContentBody menu='location' content={content.unitLocation} />
      <CommentHeader postId={id}></CommentHeader>
      {renderComment()}
      <NewComment />
    </S.Wrapper>
  );
}
