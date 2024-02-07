import UnitBoardRow from '../../../../components/ui/UnitBoardRow/UnitBoardRow';
import Banner from '../../../../components/ui/Banner';

import * as S from './SavedPost.style';

const dummy = [
  {
    id: 1,
    unitBoard: {
      category: 'notice',
      title: '커뮤니티 이용 규칙 안내드립니다.',
      contents: '이것은 커뮤니티 더미 데이터입니다.',
      date: '1/26 19:50',
      imgUrl: '../../../assets/highfive.png',
    },
  },
  {
    id: 2,
    unitBoard: {
      category: '',
      title: '오늘 가스 공사 역대급 게임 했네요.',
      contents: '이것은 커뮤니티 더미 데이터입니다.',
      date: '1/27 21:00',
      imgUrl: '../../../assets/highfive.png',
    },
  },
  {
    id: 3,
    unitBoard: {
      category: 'bookmark',
      title:
        '제목이 긴 게시물을 가정해 보고 싶었습니다... 이렇게 저렇게 요렇게?',
      contents: '이것은 커뮤니티 더미 데이터입니다.',
      date: '1/26 21:11',
      imgUrl: '../../../assets/highfive.png',
    },
  },
];

function SavedPost() {
  const renderPost = () =>
    dummy.map((post) => {
      console.log('hello', post);
      return <UnitBoardRow key={post.id} unitBoard={post.unitBoard} />;
    });

  return (
    <S.Wrapper>
      <Banner>
        <S.WhiteSpan>저장한 글</S.WhiteSpan>
      </Banner>
      <S.HeaderContainer>
        <S.Category>구분</S.Category>
        <S.Title>제목</S.Title>
        <S.Date>작성일시</S.Date>
      </S.HeaderContainer>

      {renderPost()}
    </S.Wrapper>
  );
}

export default SavedPost;
