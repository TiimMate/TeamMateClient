import React, { useEffect, useState } from 'react';
import NewPost from '../../../components/layouts/NewPostButton';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitSpaceInfoRow from '../../../components/ui/UnitSpaceInfoRow/UnitSpaceInfoRow';
import * as S from './LocationList.style';
import { useNavigate } from 'react-router-dom';
import { locationcontents } from '../../../utils/postData';
import WeeklyCalender from '../../../components/layouts/WeeklyCalendar';
import Gap from '../../../components/atoms/Gap';
import authInstance from '../../../services/authInstance';

export default function LocationList() {
  const [communityList, setCommunityList] = useState([]);
  const [date, setDate] = useState(null);
  const [lastPostId, setLastPostId] = useState(null);

  const navigate = useNavigate();
  const handleNewPost = () => {
    navigate('/location/write');
  };

  useEffect(() => {
    const getLocationList = async () => {
      try {
        setDate('2024-02-17');

        const response = await authInstance.get(
          `/posts/rent/?date=${date}&?cursorId=${lastPostId}`,
        );
        const { result } = response.data;
        setCommunityList([...result.posts]);
      } catch (error) {
        console.log(error);
      }
    };
    getLocationList();
  }, [date]);

  const renderPost = () =>
    locationcontents.map((content) => (
      <UnitSpaceInfoRow
        key={content.id}
        id={content.id}
        unitLocation={content.unitLocation}
      />
    ));

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

      {renderPost()}
    </S.Wrapper>
  );
}
