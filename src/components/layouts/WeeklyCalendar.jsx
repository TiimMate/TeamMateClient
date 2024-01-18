import styled from 'styled-components';

const date = new Date();

const calendarYear = date.getFullYear();
// 달력 월
const calendarMonth = date.getMonth() + 1;
// 달력 일
const calendarToday = date.getDate();

// const monthLastDate = new Date(calendarYear, calendarMonth, 0);
// 달력 월의 마지막 일
// const calendarMonthLastDate = monthLastDate.getDate();

// // 달력 이전 월의 마지막 일
// const prevMonthLastDate = new Date(calendarYear, calendarMonth - 1, 0);

// 달력 현재 요일
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

console.log('주');
console.log(arWeek);

const Sunday = arWeek[0];
const Monday = arWeek[1];
const Tuesday = arWeek[2];
const Wednesday = arWeek[3];
const Thursday = arWeek[4];
const Friday = arWeek[5];
const Saturday = arWeek[6];

const SundayDate = Sunday.getDate();
const MondayDate = Monday.getDate();
const TuesdayDate = Tuesday.getDate();
const WednesdayDate = Wednesday.getDate();
const ThursdayDate = Thursday.getDate();
const FirdayDate = Friday.getDate();
const SaturdayDate = Saturday.getDate();

console.log(Sunday);
console.log('일요일');

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

const Button = styled.div`
  text-align: center;
  float: left;
  width: 14.2%;
  height: 50px;
  line-height: 50px;
`;

const Wrapper = styled.nav`
  overflow: hidden;
  background: var(--White, #fff);
`;
