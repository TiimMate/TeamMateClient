import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchList from '../../../components/layouts/Matching/MatchList';
import MatchListFilter from '../../../components/layouts/Matching/MatchListFilter';
import MatchWrite from '../../../components/layouts/Matching/MatchWrite';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../../../components/layouts/Banner';
import { useDispatch } from 'react-redux';
import DaySlices from '../../../redux/Slices/DaySlices';
import authInstance from '../../../services/authInstance';
import useModal from '../../../hooks/useModal';
import MatchingModal from '../../../components/ui/MatchingModal/MatchingModal';

export default function GuestApply() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [filterCate, setFilterCate] = useState('');
  const dispatch = useDispatch();

  const { category } = useParams();

  const { isOpen, openModal, closeModal } = useModal();

  //팀 정보 입력 화면
  const navi = () => {
    navigate(`/team/create?category=${category}`);
  };

  //'0000-00-00' 형식으로 날쩌 포멧팅
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };
  let today = new Date();
  today = formatDate(today);

  useEffect(() => {
    dispatch(DaySlices.actions.change(today));
  }, []);

  const [isTeamed, setIsTeamed] = useState({
    isSuccess: true,
    code: 2000,
    message: 'success!',
    result: [],
  });

  const checkTeam = async () => {
    try {
      const response = await authInstance.get('/teams', {
        params: {
          category: category,
        },
      });
      setIsTeamed(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkTeam();
  }, []);

  return (
    <Main>
      <MainFunctionNavbar />
      <Banner />
      <WeeklyCalendar />
      <Space />
      <MatchListFilter setFilter={setFilter} setFilterCate={setFilterCate} />
      <MatchWrite
        onClick={() => {
          {
            isTeamed.result.length === 0
              ? openModal()
              : navigate(`/${category}/matching/guestHost`);
          }
        }}
        text='게스트 '
      />
      <MatchList filter={filter} filterCate={filterCate} matchType='guests' />
      <MatchingModal
        title='팀 정보 미입력'
        content='선수님의 팀 정보를 입력해주세요!'
        buttonText='팀 정보 입력화면으로 이동'
        isOpen={isOpen}
        onClose={closeModal}
        navi={navi}
      />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;

const Space = styled.div`
  height: 30px;

  background: var(--Gray100, #f0f0f0);
`;
