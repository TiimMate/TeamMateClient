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

export default function LocationList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [locationList, setLocationList] = useState([]);
  //const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [lastPostId, setLastPostId] = useState(null);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMorePosts) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 },
    );
    bottomObserver.current = observer;

    if (bottom) observer.observe(bottom);

    return () => {
      if (bottom) observer.unobserve(bottom);
    };
  }, [bottom, loading, hasMorePosts]);

  //'0000-00-00' 형식으로 날짜 포멧팅
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };
  let today = new Date();
  today = formatDate(today);

  useEffect(() => {
    const getLocationList = async ({ lastPostId }) => {
      setLoading(true);
      try {
        let response;
        if (lastPostId == null)
          response = await authInstance.get(`/posts/rent/?date=${today}`);
        else
          response = await authInstance.get(
            `/posts/rent/?date=${today}&?cursorId=${lastPostId}`,
          );

        const { result } = response.data;
        console.log(result);

        if (result.posts.length > 0) {
          setLocationList((prevList) => [...prevList, ...result.posts]);
          setLastPostId(result.posts[result.posts.length - 1].id);
        } else {
          setHasMorePosts(false);
        }
      } catch (error) {
        console.error('Error fetching location list:', error);
      } finally {
        setLoading(false);
      }
    };

    if (hasMorePosts) {
      getLocationList({ lastPostId });
      dispatch(DaySlices.actions.change(today));
    }
  }, []);

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

      {locationList.map(({ id, title, content, status }) => (
        <UnitSpaceInfoRow key={id} id={id} title={title} status={status} />
      ))}
      {loading && <S.Loading>Loading...</S.Loading>}
      <div ref={setBottom}></div>
    </S.Wrapper>
  );
}
