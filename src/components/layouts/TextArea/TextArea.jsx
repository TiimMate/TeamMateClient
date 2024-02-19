import * as S from './TextArea.style';

export default function TextArea(props, value) {
  return (
    <>
      <S.TextArea {...props}>{value ? value : null}</S.TextArea>
    </>
  );
}
