import * as S from './TextInput.style';

export default function TextInput(props) {
  return (
    <>
      <S.Input {...props}></S.Input>
      <S.ErrorMessage>{props.message}</S.ErrorMessage>
    </>
  );
}
