import styled from 'styled-components';

const date = new Date();

const calendarYear = date.getFullYear();
// 달력 월
const calendarMonth = date.getMonth() + 1;
// 달력 일
const calendarToday = date.getDate();

// 달력 현재 요일
const calendarMonthTodayDay = date.getDay();

// 주 정보 배열 생성
const arWeek = [null, null, null, null, null, null, null];

// 현재 요일 기준 왼쪽에 날짜 객체 추가
let addDay = 0;
for (let index = calendarMonthTodayDay; index < 7; index += 1) {
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDay,
  );
  addDay += 1;
}

// 현재 요일 기준 오른쪽에 날짜 객체 추가
addDay = 0;
for (let index = calendarMonthTodayDay - 1; index >= 0; index -= 1) {
  addDay -= 1;
  arWeek[index] = new Date(
    calendarYear,
    calendarMonth - 1,
    calendarToday + addDay,
  );
}

// 날짜 배열을 각 요일별로 나눔
const Sunday = arWeek[0];
const Monday = arWeek[1];
const Tuesday = arWeek[2];
const Wednesday = arWeek[3];
const Thursday = arWeek[4];
const Friday = arWeek[5];
const Saturday = arWeek[6];

// 날짜 객체의 '일'정보만 빼냄
const SundayDate = Sunday.getDate();
const MondayDate = Monday.getDate();
const TuesdayDate = Tuesday.getDate();
const WednesdayDate = Wednesday.getDate();
const ThursdayDate = Thursday.getDate();
const FirdayDate = Friday.getDate();
const SaturdayDate = Saturday.getDate();

export default function WeeklyCalendar() {
  return (
    <div>
      <Wrapper>
        <Button>{SundayDate}</Button>
        <Button>{MondayDate}</Button>
        <Button>{TuesdayDate}</Button>
        <Button>{WednesdayDate}</Button>
        <Button>{ThursdayDate}</Button>
        <Button>{FirdayDate}</Button>
        <Button>{SaturdayDate}</Button>
      </Wrapper>
    </div>
  );
}

// 날짜 컨테이너
const Button = styled.div`
  text-align: center;
  float: left;
  width: 14.2%;
  height: 50px;
  line-height: 50px;
  color: red;
`;

// 주간 달력 컨테이너
const Wrapper = styled.nav`
  overflow: hidden;
  background: var(--White, #fff);
`;
