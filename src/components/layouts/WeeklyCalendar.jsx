const date = new Date();

const calendarYear = date.getFullYear();
// �޷� ��
const calendarMonth = date.getMonth() + 1;
// �޷� ��
const calendarToday = date.getDate();

// const monthLastDate = new Date(calendarYear, calendarMonth, 0);
// �޷� ���� ������ ��
// const calendarMonthLastDate = monthLastDate.getDate();

// // �޷� ���� ���� ������ ��
// const prevMonthLastDate = new Date(calendarYear, calendarMonth - 1, 0);

// �޷� ���� ����
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
