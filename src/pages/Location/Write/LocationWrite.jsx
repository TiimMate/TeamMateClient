import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import Modal from '../../../components/ui/Modal/Modal';
import * as S from './LocationWrite.style';
import { useState, useEffect } from 'react';
import { useCallbackPrompt } from '../../../hooks/useCallbackPrompt';
import { useNavigate } from 'react-router';
import TextInput from '../../../components/layouts/TextInput/TextInput';
import TextArea from '../../../components/layouts/TextArea/TextArea';
import Gap from '../../../components/atoms/Gap';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MapContent from '../../../components/layouts/Content/MapContent';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';
import ImageUploader from '../../../components/ui/ImageUploader/ImageUploader';
import { uploadImage } from '../../../services/imageApi';
import { useDispatch } from 'react-redux';
import DaySlices from '../../../redux/Slices/DaySlices';
import { useSelector } from 'react-redux';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';

function LocationWrite() {
  const [shouldConfirm, setShouldConfirm] = useState(false);
  const [valid, setValid] = useState('true');
  const [imageList, setImageList] = useState([]);
  const [postContents, setPostContents] = useState({
    title: '',
    content: '',
    link: '',
    rentDate: '',
    rentPlace: '',
    rentMapValue: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const day = useSelector((state) => state.Day.value);
  console.log('day', day);

  //'0000-00-00' 형식으로 날쩌 포멧팅
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };
  let today = new Date();
  today = formatDate(today);

  useEffect(() => {
    if (imageList.length > 0) setShouldConfirm(true);

    setPostContents((prevState) => {
      return { ...prevState, link: imageList.join() };
    });
    dispatch(DaySlices.actions.change(today));
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

    try {
      console.log(day);
      const body = {
        ...postContents,
        link: linkString,
        rentDate: day,
      };

      console.log(body);
      const response = await authInstance.post('/posts/rent', body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    navigate('/location');
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

      <MainFunctionNavbar />
      <ContentHeader needButton={false} title={'글 작성하기'} />
      <S.ContentBody>
        <S.Label>글 제목</S.Label>
        <S.InputWrapper>
          <TextInput
            name='title'
            valid={valid}
            placeholder='제목을 입력해 주세요.'
            onChange={onChangeHandler}
          />
        </S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.InputWrapper>
          <TextArea
            name='content'
            rows={6}
            placeholder='대관 안내를 적어주세요.&#13;&#10;예시) 금요일 13 : 00 ~ 17 : 00 대관 가능합니다. '
            onChange={onChangeHandler}
            value={postContents.content}
          />
        </S.InputWrapper>

        <ImageUploader imageList={imageList} setImageList={setImageList} />
      </S.ContentBody>

      <Gap />
      <ContentHeader
        needButton={false}
        title={'대관 일자 설정하기'}
      ></ContentHeader>

      <WeeklyCalendar />

      <Gap />
      <ContentHeader
        needButton={false}
        title={'대관 장소 입력하기'}
      ></ContentHeader>
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

export default withAuth(LocationWrite);
