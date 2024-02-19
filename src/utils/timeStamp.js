export function Unix_timestampConv(d) {
  return Math.floor(d / 1000);
}

export function timeStamp(t) {
  let date = new Date(t * 1000);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  return month + '/' + day + ' ' + hour + ':' + minute;
}
