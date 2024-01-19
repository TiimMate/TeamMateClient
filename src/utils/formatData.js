export const MEMBER_RAW_DATA_BASKETBALL = {
  sport: 'basketball',
  data: [
    {
      id: '1',
      name: '박현아',
      avatarUrl: '/private/etc1.png',
      basketball: { height: '191', weight: '82', position: 'sg' },
      isLeader: 'true',
    },
    {
      id: '2',
      name: '최서은',
      avatarUrl: '/private/etc2.avif',
      basketball: { height: '186', weight: '81', position: 'sf' },
      isLeader: 'false',
    },
    {
      id: '3',
      name: '김현은',
      avatarUrl: '/private/etc3.jpg',
      basketball: { height: '193', weight: '91', position: 'pf' },
      isLeader: 'false',
    },
    {
      id: '4',
      name: '최윤아',
      avatarUrl: '/private/etc4.jfif',
      basketball: { height: '206', weight: '85', position: 'pg' },
      isLeader: 'false',
    },
    {
      id: '5',
      name: '정지영',
      avatarUrl: '/private/etc5.png',
      basketball: { height: '195', weight: '110', position: 'c' },
      isLeader: 'false',
    },
    {
      id: '6',
      name: '박서영',
      avatarUrl: '/private/etc6.png',
      basketball: { height: '187', weight: '103', position: 'sg' },
      isLeader: 'false',
    },
    {
      id: '7',
      name: '박현',
      avatarUrl: '/private/etc7.png',
      basketball: { height: '180', weight: '88', position: 'pg' },
      isLeader: 'false',
    },
    {
      id: '8',
      name: '박서우',
      avatarUrl: '/private/etc8.png',
      basketball: { height: '192', weight: '93', position: 'pg' },
      isLeader: 'false',
    },
    {
      id: '9',
      name: '정현',
      avatarUrl: '/private/etc9.png',
      basketball: { height: '187', weight: '98', position: 'sg' },
      isLeader: 'false',
    },
    {
      id: '10',
      name: '이현아',
      avatarUrl: '/private/etc10.png',
      basketball: { height: '198', weight: '108', position: 'pf' },
      isLeader: 'false',
    },
  ],
};
export const TEAM_RAW_DATA = [];

const formatBasketballMembers = (members, options = {}) => {
  const { formatUnitInfo, formatBtnText, formatOnClickBtn } = options;
  // description format해주는 함수
  const formatBasketballDescription = basketball => {
    const { height, weight, position } = basketball;
    const formatPosition = () => {
      if (position === 'pg') return '포인트가드';
      if (position === 'sg') return '슈팅가드';
      if (position === 'sf') return '스몰포워드';
      if (position === 'pf') return '파워포워드';
      if (position === 'c') return '센터';
      return '미지정';
    };
    return `${height}cm|${weight}kg|${formatPosition()}`;
  };

  // 전체적인 formating
  const newData = members.map(member => {
    const { id, name, basketball, avatarUrl, isLeader } = member;

    // 각각 options 있으면 그걸로 적용, 없으면 default로 적용
    const unitInfo = formatUnitInfo
      ? formatUnitInfo(member)
      : {
          title: name,
          description: formatBasketballDescription(basketball),
          avatarUrl,
        };
    const btnText = formatBtnText
      ? formatBtnText(member)
      : isLeader === 'true' && '팀장';
    const onClickBtn = formatOnClickBtn && formatOnClickBtn(member);

    return { id, unitInfo, btnText, onClickBtn };
  });
  return newData;
};

/** API로 받아온 memberData를 UnitInfoRow로 format 하는 함수
 *
 * rawData: api로 받아온 그대로의 data
 * options(Not Required): unitInfo, btnText, onClickBtn을 format할 수 있는 함수를 받음
 * => { formatUnitInfo, formatBtnText, formatOnClickBtn }
 *
 * formatUnitInfo(member)
 * formatBtnText(member)
 * formatOnClickBtn(member)
 *
 * 각각 options 있으면 그걸로 적용, 없으면 default로 적용
 */
export const formatMemberData = (rawData, options) => {
  const { sport, data: members } = rawData;

  // 농구
  if (sport === 'basketball') return formatBasketballMembers(members, options);

  // 축구
  if (sport === 'soccer') {
    // #TODO: 각 종목마다의 formating
    return null;
  }

  return null;
};
