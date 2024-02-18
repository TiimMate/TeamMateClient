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
//import useSrcImg from '';
import { downloadImage } from '../../../services/imageApi';

export default function CommunityDetail() {
  const { id } = useParams();

  const [communityDetail, setCommunityDetail] = useState({
    post: { title: '', content: '', link: '', imageUrls: [{ url: '' }] },
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

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { result } = (await authInstance.get(`/posts/${id}`)).data;
        console.log('get result', result);

        if (result && result.imageUrls && result.imageUrls.length > 0) {
          const images = await Promise.all(
            result.imageUrls.map(async (image) => {
              try {
                const downloadedImage = await downloadImage(image.url);
                return downloadedImage.Body;
              } catch (error) {
                console.error('Error downloading image:', error);
                return null;
              }
            }),
          );
          setCommunityDetail({ ...result, imageUrls: images });
        } else {
          setCommunityDetail({ ...result, imageUrls: [] });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeam();
  }, [id]);

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
      <CommentHeader postId={id} />
      {renderComment()}
      <NewComment />
    </S.Wrapper>
  );
}
