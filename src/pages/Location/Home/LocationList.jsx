import React from 'react';
import NewPost from '../../../components/layouts/NewPost';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitSpaceInfoRow from '../../../components/ui/UnitSpaceInfoRow';
import * as S from './LocationList.style';
import { useNavigate } from 'react-router-dom';
import { locationcontents } from '../../../utils/postData';
import WeeklyCalender from '../../../components/layouts/WeeklyCalendar';

export default function LocationList() {
  const navigate = useNavigate();
  const handleNewPost = () => {
    navigate('/location/write');
  };

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
      <S.Gap />
      <NewPost onClick={handleNewPost} />

      <S.HeaderContainer>
        <S.Title>제목</S.Title>
        <S.Status>상태</S.Status>
      </S.HeaderContainer>

      {renderPost()}
    </S.Wrapper>
  );
}
