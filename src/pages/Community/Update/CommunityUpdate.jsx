import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import Modal from '../../../components/ui/Modal/Modal';
import * as S from './CommunityUpdate.style';
import { useEffect, useState } from 'react';
import { useCallbackPrompt } from '../../../hooks/useCallbackPrompt';
import { useNavigate, useParams } from 'react-router';
import TextInput from '../../../components/layouts/TextInput/TextInput';
import TextArea from '../../../components/layouts/TextArea/TextArea';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';
import ImageUploader from '../../../components/ui/ImageUploader/ImageUploader';
import { uploadImage } from '../../../services/imageApi';
import { useSrcImgList } from '../../../hooks/useSrcImg';

function CommunityUpdate() {
  const { id } = useParams();

  const [shouldConfirm, setShouldConfirm] = useState(false);
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const [postContents, setPostContents] = useState({
    title: '',
    content: '',
    link: '',
  });
  const [imageList, setImageList] = useState([]);
  const [initialValue, setInitialValue] = useState({
    title: '',
    content: '',
    link: [],
  });
  const [imageListFromUrl, setImageListFromUrl] = useSrcImgList(
    initialValue.link,
  );

  const fetchPostDetail = async () => {
    try {
      const { result } = (await authInstance.get(`/posts/${id}`)).data;

      console.log('post result', result);

      setInitialValue({
        title: result.post.title,
        content: result.post.content,
        link: result.post.link.split(','),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [id]);

  useEffect(() => {
    if (imageList.length > 0) setShouldConfirm(true);

    setPostContents((prevState) => {
      return { ...prevState, link: imageList.join() };
    });
  }, [imageList]);

  const onChangeHandler = async (e) => {
    if (e.target.value) setShouldConfirm(true);
    const { name, value } = e.target;

    setPostContents({
      ...postContents,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const uploadPromises = imageList.map(async (file) => {
      const uploadedImage = await uploadImage(file); // 이미지 업로드
      return uploadedImage;
    });
    const uploadedImages = await Promise.all(uploadPromises);

    const linkString = uploadedImages.join(','); // 이미지 파일명(key) 배열을 문자열로 변환

    // put 요청

    navigate(`/community/${id}/detail`);
  };

  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(shouldConfirm);

  function ModalChildren() {
    const renderPromptModalContent = () => {
      return (
        <>
          <S.ModalDescription>
            작성 중인 글은 저장되지 않습니다.
          </S.ModalDescription>
          <S.ModalDescription>그래도 이동할까요?</S.ModalDescription>
          <S.ModalButtonWrapper>
            <S.GoNavigateButton onClick={confirmNavigation}>
              저장하지 않고 이동
            </S.GoNavigateButton>
            <S.GoWriteButton onClick={cancelNavigation}>
              돌아가서 저장하기
            </S.GoWriteButton>
          </S.ModalButtonWrapper>
        </>
      );
    };
    return <>{renderPromptModalContent()}</>;
  }

  return (
    <S.Wrapper>
      {showPrompt && (
        <Modal title='작성중인 페이지를 벗어날까요?' onClose={cancelNavigation}>
          <ModalChildren />
        </Modal>
      )}

      {showPrompt && (
        <Modal title='작성중인 페이지를 벗어날까요?' onClose={cancelNavigation}>
          <ModalChildren />
        </Modal>
      )}
      <MainFunctionNavbar />
      <ContentHeader needButton={false} title={'글 수정하기'} />
      <S.ContentBody>
        <S.Label>글 제목</S.Label>
        <S.InputWrapper>
          <TextInput
            name='title'
            valid={valid}
            value={initialValue.title}
            placeholder='제목을 입력해 주세요.'
            onChange={onChangeHandler}
          />
        </S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.InputWrapper>
          <TextArea
            name='content'
            value={initialValue.content}
            rows={6}
            placeholder='내용을 입력해 주세요.'
            onChange={onChangeHandler}
          ></TextArea>
        </S.InputWrapper>

        <ImageUploader
          imageList={imageListFromUrl}
          setImageList={setImageList}
        />

        <S.SaveButton
          onClick={() => {
            setShouldConfirm(false);
            onSubmit();
          }}
        >
          저장하기
        </S.SaveButton>
      </S.ContentBody>
    </S.Wrapper>
  );
}

export default withAuth(CommunityUpdate);
