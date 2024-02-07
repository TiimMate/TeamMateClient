import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './WeeklyCalendar.style';
import DaySlices from '../../redux/Slices/DaySlices';
import ArrowLeft from '../../assets/icon_arrowleft.png';
import ArrowRight from '../../assets/icon_arrowright.png';

//주간달력 양쪽 화살표를 누르면 변경되는 값. 지난주 = 0 이번주 = 1 다음주 = 2
let CurrentWeek = 1;

const date = new Date();

const calendarYear = date.getFullYear();
const calendarMonth = date.getMonth() + 1;
const calendarToday = date.getDate();
const calendarMonthTodayDay = date.getDay();

//각 요일에 들어갈 날짜 객체
const arWeek = [null, null, null, null, null, null, null];
const arLastWeek = [null, null, null, null, null, null, null];
const arNextWeek = [null, null, null, null, null, null, null];

let SundayVaule = '';
let MondayVaule = '';
let TuesdayVaule = '';
let WednesdayVaule = '';
let ThursdayVaule = '';
let FridayVaule = '';
let SaturdayVaule = '';

//현재 요일 기준 오른쪽 요일 날짜 객체 넣기
let addDayNext = 0;
for (let index = calendarMonthTodayDay; index < 7; index += 1) {
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDayNext,
  );
  addDayNext += 1;
}
for (let index = 0; index < 7; index += 1) {
  arNextWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDayNext,
  );
  addDayNext += 1;
}
//현재 요일 기준 왼쪽 요일 날짜 객체 넣기
let addDayLast = 0;
for (let index = calendarMonthTodayDay - 1; index >= 0; index -= 1) {
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDayLast,
  );
  addDayLast -= 1;
}
for (let index = 6; index >= 0; index -= 1) {
  arLastWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDayLast,
  );
  addDayLast -= 1;
}

//각 요일에 해당하는 '일'만을 빼내고 \n일을 추가하여 저장
const SundayDate = `${arWeek[0].getDate()}\n일`;
const MondayDate = `${arWeek[1].getDate()}\n월`;
const TuesdayDate = `${arWeek[2].getDate()}\n화`;
const WednesdayDate = `${arWeek[3].getDate()}\n수`;
const ThursdayDate = `${arWeek[4].getDate()}\n목`;
const FridayDate = `${arWeek[5].getDate()}\n금`;
const SaturdayDate = `${arWeek[6].getDate()}\n토`;

const LastSundayDate = `${arLastWeek[0].getDate()}\n일`;
const LastMondayDate = `${arLastWeek[1].getDate()}\n월`;
const LastTuesdayDate = `${arLastWeek[2].getDate()}\n화`;
const LastWednesdayDate = `${arLastWeek[3].getDate()}\n수`;
const LastThursdayDate = `${arLastWeek[4].getDate()}\n목`;
const LastFridayDate = `${arLastWeek[5].getDate()}\n금`;
const LastSaturdayDate = `${arLastWeek[6].getDate()}\n토`;

const NextSundayDate = `${arNextWeek[0].getDate()}\n일`;
const NextMondayDate = `${arNextWeek[1].getDate()}\n월`;
const NextTuesdayDate = `${arNextWeek[2].getDate()}\n화`;
const NextWednesdayDate = `${arNextWeek[3].getDate()}\n수`;
const NextThursdayDate = `${arNextWeek[4].getDate()}\n목`;
const NextFridayDate = `${arNextWeek[5].getDate()}\n금`;
const NextSaturdayDate = `${arNextWeek[6].getDate()}\n토`;

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

  //각 요일별 표시될 날짜
  const [Sunday, setSunday] = useState(SundayDate);
  const [Monday, setMonday] = useState(MondayDate);
  const [Tuesday, setTuesday] = useState(TuesdayDate);
  const [Wednesday, setWednesday] = useState(WednesdayDate);
  const [Thursday, setThursday] = useState(ThursdayDate);
  const [Friday, setFriday] = useState(FridayDate);
  const [Saturday, setSaturday] = useState(SaturdayDate);

  const lastWeekDaySet = () => {
    //저번주 요일 - 날짜 매치
    setSunday(LastSundayDate);
    setMonday(LastMondayDate);
    setTuesday(LastTuesdayDate);
    setWednesday(LastWednesdayDate);
    setThursday(LastThursdayDate);
    setFriday(LastFridayDate);
    setSaturday(LastSaturdayDate);

    //DaySlice Redux store에 넘길 값 설정
    SundayVaule = arLastWeek[0];
    MondayVaule = arLastWeek[1];
    TuesdayVaule = arLastWeek[2];
    WednesdayVaule = arLastWeek[3];
    ThursdayVaule = arLastWeek[4];
    FridayVaule = arLastWeek[5];
    SaturdayVaule = arLastWeek[6];
  };

  const CurrentWeekDaySet = () => {
    //이번주 요일 - 날짜 매치
    setSunday(SundayDate);
    setMonday(MondayDate);
    setTuesday(TuesdayDate);
    setWednesday(WednesdayDate);
    setThursday(ThursdayDate);
    setFriday(FridayDate);
    setSaturday(SaturdayDate);

    //DaySlice Redux store에 넘길 값 설정
    SundayVaule = arWeek[0];
    MondayVaule = arWeek[1];
    TuesdayVaule = arWeek[2];
    WednesdayVaule = arWeek[3];
    ThursdayVaule = arWeek[4];
    FridayVaule = arWeek[5];
    SaturdayVaule = arWeek[6];
  };

  const NextWeekDaySet = () => {
    //다음주 요일 - 날짜 매치
    setSunday(NextSundayDate);
    setMonday(NextMondayDate);
    setTuesday(NextTuesdayDate);
    setWednesday(NextWednesdayDate);
    setThursday(NextThursdayDate);
    setFriday(NextFridayDate);
    setSaturday(NextSaturdayDate);

    //DaySlice Redux store에 넘길 값 설정
    SundayVaule = arNextWeek[0];
    MondayVaule = arNextWeek[1];
    TuesdayVaule = arNextWeek[2];
    WednesdayVaule = arNextWeek[3];
    ThursdayVaule = arNextWeek[4];
    FridayVaule = arNextWeek[5];
    SaturdayVaule = arNextWeek[6];
  };

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
        <S.IMG
          src={ArrowLeft}
          onClick={() => {
            CurrentWeek--;
            if (CurrentWeek === 1) {
              CurrentWeekDaySet();
            } else if (CurrentWeek === 0) {
              lastWeekDaySet();
            } else if (CurrentWeek === 2) {
              NextWeekDaySet();
            } else {
              CurrentWeek++;
            }
          }}
        />
        <S.Button>
          <S.P
            onClick={() => {
              //클릭시 store에 Day값 변경
              dispatch(DaySlices.actions.change(SundayVaule));
              //배경 색(back값)변경
              onClick0();
            }}
            color='red'
            back={back0}
          >
            {Sunday}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(MondayVaule));
              onClick1();
            }}
            back={back1}
          >
            {Monday}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(TuesdayVaule));
              onClick2();
            }}
            back={back2}
          >
            {Tuesday}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(WednesdayVaule));
              onClick3();
            }}
            back={back3}
          >
            {Wednesday}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(ThursdayVaule));
              onClick4();
            }}
            back={back4}
          >
            {Thursday}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(FridayVaule));
              onClick5();
            }}
            back={back5}
          >
            {Friday}
          </S.P>
        </S.Button>
        <S.Button>
          <S.P
            onClick={() => {
              dispatch(DaySlices.actions.change(SaturdayVaule));
              onClick6();
            }}
            back={back6}
            color='blue'
          >
            {Saturday}
          </S.P>
        </S.Button>
        <S.IMG
          src={ArrowRight}
          onClick={() => {
            CurrentWeek++;
            if (CurrentWeek === 1) {
              CurrentWeekDaySet();
            } else if (CurrentWeek === 0) {
              lastWeekDaySet();
            } else if (CurrentWeek === 2) {
              NextWeekDaySet();
            } else {
              CurrentWeek--;
            }
          }}
        />
      </S.Wrapper>
    </S.Main>
  );
}
