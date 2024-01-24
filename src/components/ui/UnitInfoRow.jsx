import styled from 'styled-components';
import CircleLogo from '../atoms/CircleLogo';

// #TODO: 디자인 스타일링 상의해보기
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
  const onClick = onClickBtn || ((e) => e.preventDefault());

  return (
    <Wrapper>
      <AvatarSection>
        <Avatar $logoUrl={avatarUrl} />
      </AvatarSection>

      {date ? (
        <TextWithDate title={title} date={date} description={description} />
      ) : (
        <TextWithoutDate title={title} description={description} />
      )}

      <BtnSection>
        {btnText && (
          <Button disabled={!onClickBtn} onClick={onClick}>
            {btnText}
          </Button>
        )}
      </BtnSection>
    </Wrapper>
  );
}

function TextWithDate({ title, date, description }) {
  return (
    <TextSection>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>{description}</Description>
    </TextSection>
  );
}

function TextWithoutDate({ title, description }) {
  return (
    <TextSection>
      <TitleWithoutDate>{title}</TitleWithoutDate>
      <DescriptionWithoutDate>{description}</DescriptionWithoutDate>
    </TextSection>
  );
}

const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 4.375rem;
  box-sizing: border-box;

  background: #fff;
`;

// Avatar Section
const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 4.44%;
  margin-right: 4.72%;
`;
const Avatar = styled(CircleLogo)`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;

  border-radius: 50%;

  background-color: #d9d9d9;
`;

// Text Section
const TextSection = styled.div``;
const Title = styled.h3`
  color: var(--kakao-logo, #000);

  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem; //#TODO
  font-style: normal;
  font-weight: 500; // #TODO
  letter-spacing: -0.0375rem;
`;
const Date = styled.span`
  color: var(--Blue300, var(--kakao-logo, #0075ff));
  font-family: Pretendard;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  letter-spacing: -0.025rem;
`;
const Description = styled.p`
  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  letter-spacing: -0.025rem;
`;
// Without Date
const TitleWithoutDate = styled(Title)`
  color: black;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;
const DescriptionWithoutDate = styled(Description)`
  color: #636363;
  font-size: 10px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;

// Button Section
const BtnSection = styled.div`
  position: absolute;
  right: 4.44%;
`;
const Button = styled.button`
  display: flex;

  height: 1.875rem;

  padding: 0.25rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 0.375rem;
  background: var(--Blue300, #0075ff);

  color: var(--white, #fff);
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
  cursor: pointer;

  &:disabled {
    color: var(--Blue300, #0075ff);
    background: var(--Blue200, #bddbff);
    cursor: default;
  }
`;

export default UnitInfoRow;
