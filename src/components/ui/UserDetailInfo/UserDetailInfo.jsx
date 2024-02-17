import * as S from './UserDetailInfo.style';

import User1 from '../../../assets/users1.svg';
import MapPin from '../../../assets/map-pin2 1.svg';
import Info1 from '../../../assets/info1.svg';

function UserDetailInfo({ userInfo: { gender, ageGroup, region, position } }) {
  if (!gender || !ageGroup || !region)
    return (
      <S.Container>
        <S.Comment>
          아직 정보가 입력되지 않았습니다. <br />
          당신의 정보를 입력해 주세요!
        </S.Comment>
      </S.Container>
    );

  const formattedGender = gender === 'F' ? '여성' : '남성';
  const formattedAgeGroup = () => {
    switch (ageGroup) {
      case '-10':
        return '10대';
      case '20-29':
        return '20대';
      case '30-39':
        return '30대';
      case '40-49':
        return '40대';
      case '50-':
        return '50대 이상';
      default:
        return null;
    }
  };

  return (
    <>
      <S.InfoRow>
        <S.Icon src={User1} />
        <S.Span>
          {formattedGender} | {formattedAgeGroup()}
        </S.Span>
      </S.InfoRow>
      <S.InfoRow>
        <S.Icon src={MapPin} />
        <S.Span>{region}</S.Span>
      </S.InfoRow>
      {position && (
        <S.InfoRow>
          <S.Icon src={Info1} />
          <S.Span>{position}</S.Span>
        </S.InfoRow>
      )}
    </>
  );
}

export default UserDetailInfo;
