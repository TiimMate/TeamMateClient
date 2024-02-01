import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import Modal from '../../../components/ui/Modal/Modal';
import camera from '../../../assets/btn_camera.svg';
import * as S from './LocationUpdate.style';
import { useRef, useState } from 'react';
import { useCallbackPrompt } from '../../../hooks/useCallbackPrompt';
import useModal from '../../../hooks/useModal';
import { useNavigate } from 'react-router';
import TextInput from '../../../components/layouts/TextInput';
import TextArea from '../../../components/layouts/TextArea';
import Gap from '../../../components/layouts/Gap';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import arrowDown from '../../../assets/chevron-down-4 1.svg';
import Toast from '../../../components/ui/Toast/Toast';

export default function LocationUpdate() {
  const fileInput = useRef();
  const [imageList, setImageList] = useState([]);
  const [shouldConfirm, setShouldConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(shouldConfirm);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const newImgList = e.target.files;
    const tempImgList = [];

    for (let i = 0; i < newImgList.length; i++) {
      tempImgList.push({
        id: newImgList[i].name,
        file: newImgList[i],
        url: URL.createObjectURL(newImgList[i]),
      });
    }
    setImageList(imageList.concat(tempImgList));
  };

  const addImageList = () => {
    return imageList.map((image) => {
      return (
        <div key={image.url}>
          <S.NewImage alt='preview' src={image.url}></S.NewImage>
        </div>
      );
    });
  };

  const handleShouldConfirm = (e) => {
    if (e.target.value) setShouldConfirm(true);
  };

  const handleSubmit = () => {
    // 서버에 저장
    navigate('/location');
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
      <ContentHeader title={'글 작성하기'} />
      <S.ContentBody>
        <S.Label>글 제목</S.Label>
        <S.InputWrapper>
          <TextInput
            valid={valid}
            placeholder='제목을 입력해 주세요.'
            onChange={handleShouldConfirm}
          />
        </S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.InputWrapper>
          <TextArea
            rows={6}
            placeholder='대관 안내를 적어주세요.&#13;&#10;예시) 금요일 13 : 00 ~ 17 : 00 대관 가능합니다. '
            onChange={handleShouldConfirm}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>링크</S.Label>
          <TextInput
            valid={valid}
            placeholder='링크를 입력해 주세요.'
            onChange={handleShouldConfirm}
          />
        </S.InputWrapper>
        <S.Label>이미지</S.Label>
        <S.Image type='button' onClick={handleButtonClick}>
          <img src={camera} alt='camera'></img>
        </S.Image>
        <input
          type='file'
          ref={fileInput}
          accept='.jpg,.png,.svg'
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <S.NewImageList>{addImageList()}</S.NewImageList>
      </S.ContentBody>

      <Gap />
      <ContentHeader title={'대관 일자 설정하기'}></ContentHeader>
      <WeeklyCalendar />

      <Gap />
      <ContentHeader title={'대관 장소 입력하기'}></ContentHeader>
      <S.GymContentBody>
        <S.GymName>체육관명*</S.GymName>
        <S.SearchGym>
          체육관을 검색해보세요
          <img src={arrowDown} alt='arrow-down' />
        </S.SearchGym>

        <S.ButtonWrapper>
          <S.CompleteButton onClick={() => setShowToast(true)}>
            마감하기
          </S.CompleteButton>
          <S.SaveButton onClick={handleSubmit}>저장하기</S.SaveButton>
        </S.ButtonWrapper>
      </S.GymContentBody>
    </S.Wrapper>
  );
}