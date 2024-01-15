import styled from 'styled-components';
import UnitInfoRow from '../../components/ui/UnitInfoRow';

const dummy = [
  {
    id: 1,
    unitInfo: {
      title: '타이틀 1',
      description: '이것은 더미 데이터입니다.',
      date: '1월 17일',
    },
    btnText: '삭제하기',
    onClickBtn: null,
  },
  {
    id: 2,
    unitInfo: {
      title: '타이틀 2',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 없음',
    onClickBtn: () => {},
  },
  {
    id: 3,
    unitInfo: {
      title: '타이틀 3',
      description: '스타일링 연습 중입니다.',
      date: '2월 1일',
    },
    btnText: '삭제하기',
    onClickBtn: null,
  },
  {
    id: 4,
    unitInfo: {
      title: '타이틀 4',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 좀 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 5,
    unitInfo: {
      title: '타이틀 5',
      description: '더미 데이터 예제입니다.',
      date: '3월 12일',
    },
    btnText: '버튼 텍스트',
    onClickBtn: null,
  },
  {
    id: 6,
    unitInfo: {
      title: '타이틀 6',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 좀 더 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 7,
    unitInfo: {
      title: '타이틀 7',
      description: '더미 데이터 예제입니다.',
      date: '4월 7일',
    },
    btnText: '버튼 텍스트가 긴 경우',
    onClickBtn: null,
  },
  {
    id: 8,
    unitInfo: {
      title: '타이틀 8',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 아주 아주 아주 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 9,
    unitInfo: {
      title: '타이틀 9',
      description: '더미 데이터 예제입니다.',
      date: '5월 20일',
    },
    btnText: '버튼 길이가 길면 어떨까요?',
    onClickBtn: null,
  },
  {
    id: 10,
    unitInfo: {
      title: '타이틀 10',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '팀장',
    onClickBtn: () => {},
  },
];

function TeamDetailPage() {
  return (
    <Wrapper>
      {dummy.map(info => (
        <UnitInfoRow
          key={info.id}
          unitInfo={info.unitInfo}
          btnText={info.btnText}
          onClickBtn={info.onClickBtn}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0rem 5%;
`;

export default TeamDetailPage;
