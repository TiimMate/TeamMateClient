export const communitycontents = [
  {
    id: 1,
    menu: 'community',
    unitBoard: {
      category: 'notice',
      title: '커뮤니티 이용 규칙 안내드립니다.',
      contents: '이것은 커뮤니티 더미 데이터입니다.',
      date: '1/26 19:50',
      imgUrl: [
        { alt: 'baseball', url: '/assets/img-ball/img-ball-baseball.png' },
        { alt: 'bowling', url: '/assets/img-ball/img-ball-bowling.png' },
        { alt: 'basketball', url: '/assets/img-ball/img-ball-basketball.png' },
        { alt: 'soccer', url: '/assets/img-ball/img-ball-soccer.png' },
      ],
      bookmark: true,
    },
  },
  {
    id: 2,
    menu: 'community',
    unitBoard: {
      category: '',
      title: '오늘 가스 공사 역대급 게임 했네요.',
      contents: '이것은 커뮤니티 더미 데이터입니다.',
      date: '1/27 21:00',
      imgUrl: [
        { alt: 'baseball', url: '/assets/img-ball/img-ball-baseball.png' },
        { alt: 'bowling', url: '/assets/img-ball/img-ball-bowling.png' },
      ],
      bookmark: false,
    },
  },
  {
    id: 3,
    menu: 'community',
    unitBoard: {
      category: 'bookmark',
      title:
        '제목이 긴 게시물을 가정해 보고 싶었습니다... 이렇게 저렇게 요렇게?',
      contents: '이것은 커뮤니티 더미 데이터입니다.',
      date: '1/26 21:11',
      imgUrl: '../../../assets/highfive.png',
      bookmark: true,
    },
  },
];

export const comments = [
  {
    id: 1,
    unitComment: {
      user: '박oo',
      comment:
        '도움되는 글이네여 굿굿 너무 좋습니다. 멋집니다. 최고의 경기에요.',
      date: '1/26 19:50',
    },
  },
  {
    id: 2,
    unitComment: {
      user: '류oo',
      comment: '헐 대박~',
      date: '1/26 19:50',
    },
  },
  {
    id: 3,
    unitComment: {
      user: '고oo',
      comment: '따봉',
      date: '1/30 19:55',
    },
  },
  {
    id: 4,
    unitComment: {
      user: '김oo',
      comment: '와우',
      date: '1/31 22:31',
    },
  },
];

export const locationcontents = [
  {
    id: 1,
    menu: 'location',
    unitLocation: {
      title: '하남시 청소년 수련관',
      contents: '금요일 13:00 - 17:00 대관 가능합니다.',
      date: '1/26 19:50',
      imgUrl: [
        { alt: 'baseball', url: '/assets/img-ball/img-ball-baseball.png' },
        { alt: 'bowling', url: '/assets/img-ball/img-ball-bowling.png' },
      ],
      recruit: true,
    },
  },
  {
    id: 2,
    menu: 'location',
    unitLocation: {
      title: '서울 상문고등학교 운동장 토요일 1회 대관 비었습니다.',
      contents: '최고의 운동장입니다. 얼른 겟하세요.',
      date: '1/27 21:00',
      imgUrl: '../../../assets/highfive.png',
      recruit: true,
    },
  },
  {
    id: 3,
    menu: 'location',
    unitLocation: {
      title: '서울 상문고등학교 운동장 토요일 1회 대관 비었습니다.',
      contents: '최고의 운동장입니다. 얼른 겟하세요.',
      date: '1/31 22:13',
      imgUrl: '../../../assets/highfive.png',
      recruit: false,
    },
  },
];
