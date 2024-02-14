import Banner from '../../../components/atoms/Banner';
import NotPost from '../components/NotPost';

import * as S from './MyLocation.style';

function MyLocation() {
  return (
    <S.Wrapper>
      <Banner>
        <S.WhiteSpan>내 대관정보</S.WhiteSpan>
      </Banner>
      <S.HeaderContainer>
        <S.Category>구분</S.Category>
        <S.Title>제목</S.Title>
        <S.Date>작성일시</S.Date>
      </S.HeaderContainer>

      {/* {renderPost()} */}
      <NotPost title='지정된 장소가' />
    </S.Wrapper>
  );
}

export default MyLocation;
