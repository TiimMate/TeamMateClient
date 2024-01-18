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

console.log(arWeek);
