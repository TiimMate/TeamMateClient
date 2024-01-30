import * as S from './TextArea.style';

export default function TextArea(props) {
  return (
    <>
      <S.TextArea {...props}></S.TextArea>
      <S.ErrorMessage>{props.message}</S.ErrorMessage>
    </>
  );
}
