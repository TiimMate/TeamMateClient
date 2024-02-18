import React, { useEffect, useState } from 'react';
import * as S from './MatchList.style';
import MatchInfo from './MatchInfo';
import { useSelector } from 'react-redux';
import authInstance from '../../../services/authInstance';

export default function MatchList(props) {
  let filterQuery = '';
  if (props.filterCate === 'region') {
    filterQuery = '/region';
  }
  if (props.filterCate === 'gender') {
    filterQuery = '/gender';
  }
  if (props.filterCate === 'level') {
    filterQuery = '/level';
  }

  const day = useSelector((state) => state.Day.value);

  const [gameList, setGameList] = useState({
    isSuccess: true,
    code: 2000,
    message: 'success!',
    result: {
      guests: [],
    },
  });
  const [loading, setLoading] = useState(false);

  const fetchGameList = async () => {
    try {
      setGameList(null);
      setLoading(true); //로딩이 시작됨
      const response = await authInstance.get(
        `/${props.matchType}${filterQuery}`,
        {
          params: {
            date: day,
            category: 'basketball',
            cursorId: 20,
            gender: props.filter,
            level: props.filter,
            region: props.filter,
          },
        },
      );
      setGameList(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGameList();
  }, [props.filter, day]);

  if (loading) return <div>로딩중..</div>;
  if (gameList.result.length === 0) return null; //users값이 유효하지 않는 경우

  return (
    <S.Wrapper>
      {gameList &&
        Object.entries(gameList.result.guests).map((info) => (
          <MatchInfo unitInfo={info[1]} page={props.matchType} />
        ))}
    </S.Wrapper>
  );
}
