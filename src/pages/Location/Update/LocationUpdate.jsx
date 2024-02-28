import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import Modal from '../../../components/ui/Modal/Modal';
import camera from '../../../assets/btn_camera.svg';
import * as S from './LocationUpdate.style';
import { useEffect, useState } from 'react';
import { useCallbackPrompt } from '../../../hooks/useCallbackPrompt';
import useModal from '../../../hooks/useModal';
import { useNavigate, useParams } from 'react-router';
import TextInput from '../../../components/layouts/TextInput/TextInput';
import TextArea from '../../../components/layouts/TextArea/TextArea';
import Gap from '../../../components/atoms/Gap';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import Toast from '../../../components/ui/Toast/Toast';
import MapContent from '../../../components/layouts/Content/MapContent';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';
import ImageUploader from '../../../components/ui/ImageUploader/ImageUploader';
import { uploadImage } from '../../../services/imageApi';
import { useSrcImgList } from '../../../hooks/useSrcImg';

function LocationUpdate() {
  const { id } = useParams();

  const [shouldConfirm, setShouldConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const [postContents, setPostContents] = useState({
    title: '',
    content: '',
    link: '',
    rentDate: '',
    rentPlace: '',
    rentMapValue: '',
  });
  const [imageList, setImageList] = useState([]);
  const [initialValue, setInitialValue] = useState({
    title: '',
    content: '',
    link: [],
    rentDate: '',
    rentPlace: '',
    rentMapValue: '',
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
        rentDate: result.post.rentDate,
        rentPlace: result.post.rentPlace,
        rentMapValue: result.post.rentMapValue,
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

    navigate(`/location/${id}/detail`);
  };

  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(shouldConfirm);

  const handleShouldConfirm = (e) => {
    if (e.target.value) setShouldConfirm(true);
  };

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

      {showToast && (
        <Toast
          message='대관정보를 마감하였습니다!'
          setToastState={setShowToast}
        ></Toast>
      )}

      <MainFunctionNavbar />
      <ContentHeader title={'글 수정하기'} />
      <S.ContentBody>
        <S.Label>글 제목</S.Label>
        <S.InputWrapper>
          <TextInput
            name='title'
            valid={valid}
            value={initialValue.title}
            placeholder='제목을 입력해 주세요.'
            onChange={handleShouldConfirm}
          />
        </S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.InputWrapper>
          <TextArea
            name='content'
            value={initialValue.content}
            rows={6}
            placeholder='대관 안내를 적어주세요.&#13;&#10;예시) 금요일 13 : 00 ~ 17 : 00 대관 가능합니다. '
            onChange={handleShouldConfirm}
          />
        </S.InputWrapper>

        <ImageUploader
          imageList={imageListFromUrl}
          setImageList={setImageList}
        />
      </S.ContentBody>

      <Gap />
      <ContentHeader title={'대관 일자 설정하기'}></ContentHeader>
      <WeeklyCalendar />

      <Gap />
      <ContentHeader title={'대관 장소 입력하기'}></ContentHeader>
      <S.ContentBody>
        <S.InputWrapper>
          <GymSelector
            gym={postContents.rentPlace}
            setGym={(sel) => {
              setPostContents((prevState) => {
                return { ...prevState, rentPlace: sel };
              });
            }}
          />
          {/* <MapContent workFor={'write'} /> */}
        </S.InputWrapper>
      </S.ContentBody>

      <S.ButtonWrapper>
        <S.CompleteButton onClick={() => setShowToast(true)}>
          마감하기
        </S.CompleteButton>
        <S.SaveButton
          onClick={() => {
            setShouldConfirm(false);
            onSubmit();
          }}
        >
          저장하기
        </S.SaveButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
export default withAuth(LocationUpdate);
