import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import ContentHeader from '../../../components/layouts/Content/ContentHeader';
import Modal from '../../../components/ui/Modal/Modal';
import * as S from './LocationWrite.style';
import { useState } from 'react';
import { useCallbackPrompt } from '../../../hooks/useCallbackPrompt';
import { useNavigate } from 'react-router';
import TextInput from '../../../components/layouts/TextInput/TextInput';
import TextArea from '../../../components/layouts/TextArea/TextArea';
import Gap from '../../../components/atoms/Gap';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MapContent from '../../../components/layouts/Content/MapContent';
import ImageUploader from '../../../components/ui/ImageUploader/ImageUploader';
import authInstance from '../../../services/authInstance';

export default function LocationWrite() {
  const [imageList, setImageList] = useState([]);
  const [shouldConfirm, setShouldConfirm] = useState(false);
  const [valid, setValid] = useState('true');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(shouldConfirm);

  const handleShouldConfirm = (e) => {
    if (e.target.value) setShouldConfirm(true);
  };

  // const handleSubmit = () => {
  //   // 서버에 저장
  //   navigate('/location');
  // };

  const handleSubmit = async () => {
    try {
      const response = await authInstance.post('/posts/rent', {
        title,
        content,
      });
      const { result } = response.data;
    } catch (error) {
      console.log(error);
    }
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

      <MainFunctionNavbar />
      <ContentHeader needButton={false} title={'글 작성하기'} />
      <S.ContentBody>
        <S.Label>글 제목</S.Label>
        <S.InputWrapper>
          <TextInput
            valid={valid}
            placeholder='제목을 입력해 주세요.'
            value={title}
            onChange={(e) => {
              setShouldConfirm(true);
              setTitle(e.target.value);
              console.log(title);
            }}
          />
        </S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.InputWrapper>
          <TextArea
            rows={6}
            placeholder='대관 안내를 적어주세요.&#13;&#10;예시) 금요일 13 : 00 ~ 17 : 00 대관 가능합니다. '
            onChange={(e) => {
              setShouldConfirm(true);
              setContent(e.target.value);
              console.log(content);
            }}
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
          <MapContent workFor={'write'} />
        </S.InputWrapper>
      </S.ContentBody>

      <S.ButtonWrapper>
        <S.SaveButton onClick={handleSubmit}>저장하기</S.SaveButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
