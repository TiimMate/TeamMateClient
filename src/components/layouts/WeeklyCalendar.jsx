import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DaySlices from '../../redux/Slices/DaySlices';

const date = new Date();

const calendarYear = date.getFullYear();
const calendarMonth = date.getMonth() + 1;
const calendarToday = date.getDate();

const calendarMonthTodayDay = date.getDay();

const arWeek = [null, null, null, null, null, null, null];

let addDay = 0;
for (let index = calendarMonthTodayDay; index < 7; index += 1) {
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDay,
  );
  addDay += 1;
}

addDay = 0;
for (let index = calendarMonthTodayDay - 1; index >= 0; index -= 1) {
  addDay -= 1;
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDay,
  );
}

const Sunday = arWeek[0];
const Monday = arWeek[1];
const Tuesday = arWeek[2];
const Wednesday = arWeek[3];
const Thursday = arWeek[4];
const Friday = arWeek[5];
const Saturday = arWeek[6];

const SundayDate = `${Sunday.getDate()}\n일`;
const MondayDate = `${Monday.getDate()}\n일`;
const TuesdayDate = `${Tuesday.getDate()}\n일`;
const WednesdayDate = `${Wednesday.getDate()}\n일`;
const ThursdayDate = `${Thursday.getDate()}\n일`;
const FirdayDate = `${Friday.getDate()}\n일`;
const SaturdayDate = `${Saturday.getDate()}\n일`;

export default function WeeklyCalendar() {
  const dispatch = useDispatch();
  const day = useSelector((state) => state.Day.value);
  const [back0, setBack0] = useState('white');
  const [back1, setBack1] = useState('white');
  const [back2, setBack2] = useState('white');
  const [back3, setBack3] = useState('white');
  const [back4, setBack4] = useState('white');
  const [back5, setBack5] = useState('white');
  const [back6, setBack6] = useState('white');

  const onClick0 = () => {
    setBack0('var(--Gray100, #F0F0F0);');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick1 = () => {
    setBack0('white');
    setBack1('var(--Gray100, #F0F0F0);');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick2 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('var(--Gray100, #F0F0F0);');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick3 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('var(--Gray100, #F0F0F0);');
    setBack4('white');
    setBack5('white');
    setBack6('white');
  };
  const onClick4 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('var(--Gray100, #F0F0F0);');
    setBack5('white');
    setBack6('white');
  };
  const onClick5 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('var(--Gray100, #F0F0F0);');
    setBack6('white');
  };
  const onClick6 = () => {
    setBack0('white');
    setBack1('white');
    setBack2('white');
    setBack3('white');
    setBack4('white');
    setBack5('white');
    setBack6('var(--Gray100, #F0F0F0);');
  };

  useEffect(() => {
    if (calendarMonthTodayDay === 0) {
      onClick0();
    } else if (calendarMonthTodayDay === 1) {
      onClick1();
    } else if (calendarMonthTodayDay === 2) {
      onClick2();
    } else if (calendarMonthTodayDay === 3) {
      onClick3();
    } else if (calendarMonthTodayDay === 4) {
      onClick4();
    } else if (calendarMonthTodayDay === 5) {
      onClick5();
    } else if (calendarMonthTodayDay === 6) {
      onClick6();
    }
  }, []);

  return (
    <Main>
      <Wrapper>
        <Button>
          <P
            color='red'
            onClick={() => {
              dispatch(DaySlices.actions.change(0));
              onClick0();
            }}
            back={back0}
          >
            {SundayDate}
          </P>
        </Button>
        <Button>
          <P
            onClick={() => {
              dispatch(DaySlices.actions.change(1));
              onClick1();
            }}
            back={back1}
          >
            {MondayDate}
          </P>
        </Button>
        <Button>
          <P
            onClick={() => {
              dispatch(DaySlices.actions.change(2));
              onClick2();
            }}
            back={back2}
          >
            {TuesdayDate}
          </P>
        </Button>
        <Button>
          <P
            onClick={() => {
              dispatch(DaySlices.actions.change(3));
              onClick3();
            }}
            back={back3}
          >
            {WednesdayDate}
          </P>
        </Button>
        <Button>
          <P
            onClick={() => {
              dispatch(DaySlices.actions.change(4));
              onClick4();
            }}
            back={back4}
          >
            {ThursdayDate}
          </P>
        </Button>
        <Button>
          <P
            onClick={() => {
              dispatch(DaySlices.actions.change(5));
              onClick5();
            }}
            back={back5}
          >
            {FirdayDate}
          </P>
        </Button>
        <Button>
          <P
            color='blue'
            onClick={() => {
              dispatch(DaySlices.actions.change(6));
              onClick6();
            }}
            back={back6}
          >
            {SaturdayDate}
          </P>
        </Button>
      </Wrapper>
      {day}
    </Main>
  );
}

const P = styled.p`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 6px;
  color: ${(props) => props.color || 'black'};
  background: ${(props) => props.back};
  width: fit-content;
  white-space: pre-line;
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500; /* 글자가 너무 두꺼워보여서 700 -> 500으로 수정했어요*/
  line-height: 18px; /* 150% */
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
  width: 14.2%;
  height: 70px;
  color: ${(props) => props.color || 'black'};
  background: ${(props) => props.back};
`;

const Main = styled.div`
  width: 100%;
`;

const Wrapper = styled.nav`
  height: 70px;
  overflow: hidden;
  background: var(--White, #fff);
`;
