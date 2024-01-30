import * as S from './CommunityDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import PostHeader from '../../../components/layouts/PostHeader';
import { useParams } from 'react-router';
import CommentHeader from '../../../components/layouts/CommentHeader';
import UnitCommentRow from '../../../components/ui/UnitCommentRow/UnitCommentRow';

export default function CommunityDetail() {
  const { id } = useParams();

  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <PostHeader title={'이건 글 제목입니다.'} />
      <S.PostContents>{id}</S.PostContents>
      <CommentHeader></CommentHeader>
      <UnitCommentRow />
    </S.Wrapper>
  );
}
