import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import Button300 from '../../../components/atoms/Button300';
import camera from '../../../assets/btn_camera.svg';
import * as S from './CommunityWrite.style';
import { useRef, useState } from 'react';

import Modal from '../../../components/ui/Modal/Modal';

export default function CommunityWrite() {
  const fileInput = useRef();
  const [imageList, setImageList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addImageList = () => {
    return imageList.map((image) => {
      return (
        <div key={image.url}>
          <S.NewImage alt='preview' src={image.url}></S.NewImage>
        </div>
      );
    });
  };

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

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      {isModalOpen && (
        <Modal title='작성 중인 페이지를 벗어날까요?' onClose={onCloseModal}>
          <ModalChildren></ModalChildren>
        </Modal>
      )}

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

function ModalChildren() {}
