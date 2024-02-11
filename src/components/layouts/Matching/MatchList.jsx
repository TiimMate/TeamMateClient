import React, { useEffect, useState } from 'react';
import * as S from './MatchList.style';
import MatchInfo from './MatchInfo';
import axios from 'axios';

const dummy = [
  {
    id: 1,
    unitInfo: {
      title: '퀵 ',
      date: '24/01/04',
      time: '15:00',
      GymName: '강북청소년수련관',
      Capacity: 55,
      Region: '서울 강북구',
      age: '20~30대',
      level: '5',
      gender: '남성',
    },
    state: 1,
  },
  {
    id: 2,
    unitInfo: {
      title: '코티스트 ',
      date: '24/01/04',
      time: '17:00',
      GymName: '신당초등학교',
      Capacity: 15,
      Region: '서울 강북구',
      age: '20~30대',
      level: '93',
      gender: '남성',
    },
    state: 1,
  },
  {
    id: 1,
    unitInfo: {
      title: '팀메이트 ',
      date: '24/01/04',
      time: '19:00',
      GymName: '홍대',
      Capacity: 55,
      Region: '서울 마포구',
      age: '20~30대',
      level: '999',
      gender: '혼성',
    },
    state: 1,
  },
];

export default function MatchList() {
  const [gaemList, setGameList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGameList = async () => {
    try {
      setGameList(null);
      setError(null);
      setLoading(true); //로딩이 시작됨
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
      );
      setGameList(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGameList();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러 발생!!</div>;
  if (!gaemList) return null; //users값이 유효하지 않는 경우

  return (
    <S.Wrapper>
      {/* {dummy.map((info) => (
        <MatchInfo
          id={info.id}
          unitInfo={info.unitInfo}
          state={info.state}
          page={'apply'}
        />
      ))} */}
      <ul>
        {gaemList.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
}
