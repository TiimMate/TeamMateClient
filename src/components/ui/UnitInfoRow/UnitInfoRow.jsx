import { useSrcImg } from '../../../hooks/useSrcImg';
import * as S from './UnitInfoRow.style';

/**
 * image / text / btn
 *
 * props: {
 *
 *  unitInfo: (Required) title, description
 *
 * (Not Reuired) date, avatarUrl
 *
 * object로 감싸주시면 됨
 *
 *  btnText: string, 없으면 button이 사라져요
 *
 *  onClickBtn: func, ex) 특정한 주소로 navigate, 없으면 disabled된 상태
 * }
 * */
function UnitInfoRow({ unitInfo, btnText, onClickBtn }) {
  const { title, description, date, avatarUrl } = unitInfo;
  const [img] = useSrcImg(avatarUrl);
  const onClick = onClickBtn || ((e) => e.preventDefault());

  return (
    <S.Wrapper>
      <S.AvatarSection>
        <S.Avatar $logoUrl={img} />
      </S.AvatarSection>

      {date ? (
        <TextWithDate title={title} date={date} description={description} />
      ) : (
        <TextWithoutDate title={title} description={description} />
      )}

      <S.BtnSection>
        {btnText && (
          <S.Button disabled={!onClickBtn} onClick={onClick}>
            {btnText}
          </S.Button>
        )}
      </S.BtnSection>
    </S.Wrapper>
  );
}

function TextWithDate({ title, date, description }) {
  return (
    <S.TextSection>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.Description>{description}</S.Description>
    </S.TextSection>
  );
}

function TextWithoutDate({ title, description }) {
  return (
    <S.TextSection>
      <S.TitleWithoutDate>{title}</S.TitleWithoutDate>
      <S.DescriptionWithoutDate>{description}</S.DescriptionWithoutDate>
    </S.TextSection>
  );
}

export default UnitInfoRow;
