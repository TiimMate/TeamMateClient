// #TODO url 바꾸기
export const convertSportToUrl = (sport) => {
  switch (sport) {
    case '축구':
      return '/soccer';
    case '풋살':
      return '/futsal';
    case '농구':
      return '/basketball';
    case '배구':
      return '/volleyball';
    case '야구':
      return '/baseball';
    case '탁구':
      return '/pingpong';
    case '볼링':
      return '/bowling';
    case '배드민턴':
      return '/badminton';
    case '테니스':
      return '/tennis';
    default:
      return null;
  }
};

export const convertCategoryToUrl = (category) => {
  switch (category) {
    case '게스트':
      return '/matching/guestapply';
    case '연습경기':
      return '/matching/teamapply';
    case '대관정보':
      return '/location';
    case '커뮤니티':
      return '/community';
    default:
      return null;
  }
};
