import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './WeeklyCalendar.style';
import DaySlices from '../../redux/Slices/DaySlices';

const date = new Date();

const calendarYear = date.getFullYear();
const calendarMonth = date.getMonth() + 1;
const calendarToday = date.getDate();
const calendarMonthTodayDay = date.getDay();

//각 요일에 들어갈 날짜 객체
const arWeek = [null, null, null, null, null, null, null];

//현재 요일 기준 오른쪽 요일 날짜 객체 넣기
let addDay = 0;
for (let index = calendarMonthTodayDay; index < 7; index += 1) {
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDay,
  );
  addDay += 1;
}

//현재 요일 기준 왼쪽 요일 날짜 객체 넣기
addDay = 0;
for (let index = calendarMonthTodayDay - 1; index >= 0; index -= 1) {
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDay,
  );
  addDay -= 1;
}

//각 요일에 해당하는 '일'만을 빼내고 \n일을 추가하여 저장
const SundayDate = `${arWeek[0].getDate()}\n일`;
const MondayDate = `${arWeek[1].getDate()}\n일`;
const TuesdayDate = `${arWeek[2].getDate()}\n일`;
const WednesdayDate = `${arWeek[3].getDate()}\n일`;
const ThursdayDate = `${arWeek[4].getDate()}\n일`;
const FirdayDate = `${arWeek[5].getDate()}\n일`;
const SaturdayDate = `${arWeek[6].getDate()}\n일`;

export default function WeeklyCalendar() {
  const dispatch = useDispatch();
  const day = useSelector((state) => state.Day.value);

  //클릭시 배경값 변경을 위한 요일별 useState 지정
  const [back0, setBack0] = useState('white');
  const [back1, setBack1] = useState('white');
  const [back2, setBack2] = useState('white');
  const [back3, setBack3] = useState('white');
  const [back4, setBack4] = useState('white');
  const [back5, setBack5] = useState('white');
  const [back6, setBack6] = useState('white');

  //각 요일별 클릭 이벤트입니다. 클릭시 해당 요일의 배경만 색을 주고, 나머지는 다른 기본값으로 변경되게 설정했습니다
  const onClick0 = () => {
    setBack0('var(--gray-100, #F0F0F0);');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick1 = () => {
    setBack0('white');
    setBack1('var(--gray-100, #F0F0F0);');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick2 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('var(--gray-100, #F0F0F0);');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick3 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('var(--gray-100, #F0F0F0);');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick4 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('var(--gray-100, #F0F0F0);');
    setBack5('white');
    setBack6('white');
  };
  const onClick5 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('var(--gray-100, #F0F0F0);');
    setBack6('white');
  };
  const onClick6 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('var(--gray-100, #F0F0F0);');
  };

  //페이지에 처음 들어갔을때 현재 요일에 해당되는 요일의 배경값과 내용이 보이게 하기 위해 첫 랜더링시에만 실행되는 코드입니다.
  useEffect(() => {
    if (calendarMonthTodayDay === 0) {
      onClick0();
      dispatch(DaySlices.actions.change(0));
    } else if (calendarMonthTodayDay === 1) {
      onClick1();
      dispatch(DaySlices.actions.change(1));
    } else if (calendarMonthTodayDay === 2) {
      onClick2();
      dispatch(DaySlices.actions.change(2));
    } else if (calendarMonthTodayDay === 3) {
      onClick3();
      dispatch(DaySlices.actions.change(3));
    } else if (calendarMonthTodayDay === 4) {
      onClick4();
      dispatch(DaySlices.actions.change(4));
    } else if (calendarMonthTodayDay === 5) {
      onClick5();
      dispatch(DaySlices.actions.change(5));
    } else if (calendarMonthTodayDay === 6) {
      onClick6();
      dispatch(DaySlices.actions.change(6));
    }
  }, []);

  return (
    <S.Main>
      <S.Wrapper>
        <S.Button>
          <S.P
            onClick={() => {
              //클릭시 store에 Day값 변경
              dispatch(DaySlices.actions.change(0));
              //배경 색(back값)변경
              onClick0();
            }}
            color='red'
            back={back0}
          >
            {SundayDate}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(1));
              onClick1();
            }}
            back={back1}
          >
            {MondayDate}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(2));
              onClick2();
            }}
            back={back2}
          >
            {TuesdayDate}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(3));
              onClick3();
            }}
            back={back3}
          >
            {WednesdayDate}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(4));
              onClick4();
            }}
            back={back4}
          >
            {ThursdayDate}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(5));
              onClick5();
            }}
            back={back5}
          >
            {FirdayDate}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(6));
              onClick6();
            }}
            back={back6}
            color='blue'
          >
            {SaturdayDate}
          </S.P>
        </S.Button>
      </S.Wrapper>
    </S.Main>
  );
}
