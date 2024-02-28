import React, { useEffect, useState, useRef } from 'react';
import NewPost from '../../../components/layouts/NewPostButton';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitSpaceInfoRow from '../../../components/ui/UnitSpaceInfoRow/UnitSpaceInfoRow';
import * as S from './LocationList.style';
import { useNavigate } from 'react-router-dom';
import { locationcontents } from '../../../utils/postData';
import WeeklyCalender from '../../../components/layouts/WeeklyCalendar';
import Gap from '../../../components/atoms/Gap';
import authInstance from '../../../services/authInstance';
import { useDispatch } from 'react-redux';
import DaySlices from '../../../redux/Slices/DaySlices';
import { useSelector } from 'react-redux';
import withAuth from '../../../hooks/hoc/withAuth';

function LocationList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [locationList, setLocationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [lastPostId, setLastPostId] = useState(null);

  const day = useSelector((state) => state.Day.value);

  const fetchLocationList = async ({ lastPostId }) => {
    try {
      // setLocationList([]);
      setLoading(true); //로딩이 시작됨
      const response = await authInstance.get('/posts/rent', {
        params: {
          date: day,
          cursorId: lastPostId,
        },
      });
      console.log('response', response);

      const { result } = response.data;
      console.log('get /posts/rent result', result);
      console.log(result.posts);

      setLocationList(result.posts);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(day);

    fetchLocationList({ lastPostId });
  }, [day, lastPostId]);

  const handleNewPost = () => {
    navigate('/location/write');
  };

  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <WeeklyCalender />
      <Gap height='1.875rem' />
      <NewPost onClick={handleNewPost} />

      <S.HeaderContainer>
        <S.Title>제목</S.Title>
        <S.Status>상태</S.Status>
      </S.HeaderContainer>

      {locationList.map(({ id, isBookmarked, title, content, status }) => (
        <UnitSpaceInfoRow
          key={id}
          id={id}
          isBookmarked={isBookmarked}
          title={title}
          status={status}
        />
      ))}
      {loading && <S.Loading>Loading...</S.Loading>}
    </S.Wrapper>
  );
}

export default withAuth(LocationList);
