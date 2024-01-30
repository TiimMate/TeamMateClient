import * as S from './UserDetailInfo.style';

import User1 from '../../../assets/users1.svg';
import MapPin from '../../../assets/map-pin2 1.svg';
import Info1 from '../../../assets/info1.svg';

function UserDetailInfo({ userInfo: { gender, age, address, position } }) {
  return (
    <S.Wrapper>
      <S.InfoRow>
        <S.Icon src={User1} />
        <S.Span>
          {gender} | {age}
        </S.Span>
      </S.InfoRow>
      <S.InfoRow>
        <S.Icon src={MapPin} />
        <S.Span>{address}</S.Span>
      </S.InfoRow>
      <S.InfoRow>
        <S.Icon src={Info1} />
        <S.Span>{position}</S.Span>
      </S.InfoRow>
    </S.Wrapper>
  );
}

export default UserDetailInfo;
