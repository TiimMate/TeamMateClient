import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import Button300 from '../../../components/atoms/Button300';
import camera from '../../../assets/btn_camera.svg';
import * as S from './CommunityWrite.style';
import { useEffect, useRef, useState } from 'react';
import { useCallbackPrompt } from '../../../utils/hooks/useCallbackPrompt';
import Modal, {
  ModalButton,
  ModalButtonBlue,
  ModalInput,
  ModalContentWrapper,
} from '../../../components/ui/Modal';

export default function CommunityWrite() {
  const fileInput = useRef();
  const [imageList, setImageList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [shouldConfirm, setShouldConfirm] = useState(false); // 수정된 내역이 있다면
  // const [isLeave, setIsLeave] = useState(false); // 모달창에서 이동 버튼 클릭시 true로 변경
  // const [nextLocation, setNextLocation] = useState();
  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(true);

  const addImageList = () => {
    return imageList.map((image) => {
      return (
        <div key={image.url}>
          <S.NewImage alt='preview' src={image.url}></S.NewImage>
        </div>
      );
    });
  };

  // useEffect(() => {
  //   console.log(shouldConfirm);
  // }, [shouldConfirm]);

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

  // const handlePrompt = (location) => {
  //   if (!isLeave && shouldConfirm) {
  //     setNextLocation(location.pathname); // 사용자가 이동하려고했던 path 저장
  //     return false; // 페이지 이동 막음
  //   }
  //   return true;
  // };

  // const onCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <S.Wrapper>
      <Modal
        title='작성중인 페이지를 벗어날까요?'
        isOpen={showPrompt}
        onDoneClick={confirmNavigation}
        onClose={cancelNavigation}
      >
        <ModalChildren></ModalChildren>
      </Modal>

      <MainFunctionNavbar />
      <S.Header>글 작성하기</S.Header>
      <S.PostContainer>
        <S.Label>글 제목</S.Label>
        <S.TitleInput placeholder='제목을 입력해 주세요.' />
        <S.Label>내용</S.Label>
        <S.ContentsTextarea rows={6} placeholder='내용을 입력해 주세요.' />
        <S.Label>링크</S.Label>
        <S.LinkInput placeholder='링크를 입력해 주세요.' />
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
        <S.SaveButton>저장하기</S.SaveButton>
      </S.PostContainer>
    </S.Wrapper>
  );
}

function ModalChildren() {
  const renderPromptModalContent = () => {
    return (
      <>
        <S.ModalDescription>
          작성 중인 글은 저장되지 않습니다.
        </S.ModalDescription>
        <S.ModalDescription>그래도 이동할까요?</S.ModalDescription>
        <S.ModalButtonWrapper>
          <S.GoNavigateButton>저장하지 않고 이동</S.GoNavigateButton>
          <S.GoWriteButton>돌아가서 저장하기</S.GoWriteButton>
        </S.ModalButtonWrapper>
      </>
    );
  };
  return <>{renderPromptModalContent()}</>;
}
