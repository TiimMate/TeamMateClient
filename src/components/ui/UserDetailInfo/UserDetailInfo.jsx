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
  return (
    <>
      <S.InfoRow>
        <S.Icon src={User1} />
        <S.Span>
          {gender} | {ageGroup}
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
