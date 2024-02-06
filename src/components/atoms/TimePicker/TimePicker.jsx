import React, { useRef } from 'react';
import * as S from './TimePicker.style';

const Hour = [
  { hour: '', location: 0 },
  { hour: '01', location: 0 },
  { hour: '02', location: 28.3 * 1 },
  { hour: '03', location: 28.3 * 2 },
  { hour: '04', location: 28.3 * 3 },
  { hour: '05', location: 28.3 * 4 },
  { hour: '06', location: 28.3 * 5 },
  { hour: '07', location: 28.3 * 6 },
  { hour: '08', location: 28.3 * 7 },
  { hour: '09', location: 28.3 * 8 },
  { hour: '10', location: 28.3 * 9 },
  { hour: '11', location: 28.3 * 10 },
  { hour: '12', location: 28.3 * 11 },
  { hour: '', location: 28.3 * 12 },
];

const Minute = [
  { minute: '', location: 0 },
  { minute: '00', location: 0 },
  { minute: '05', location: 28.3 * 1 },
  { minute: '10', location: 28.3 * 2 },
  { minute: '15', location: 28.3 * 3 },
  { minute: '20', location: 28.3 * 4 },
  { minute: '25', location: 28.3 * 5 },
  { minute: '30', location: 28.3 * 6 },
  { minute: '35', location: 28.3 * 7 },
  { minute: '40', location: 28.3 * 8 },
  { minute: '45', location: 28.3 * 9 },
  { minute: '50', location: 28.3 * 10 },
  { minute: '55', location: 28.3 * 11 },
  { minute: '', location: 28.3 * 12 },
];

const AMPM = [
  { ampm: '', location: 0 },
  { ampm: 'AM', location: 0 },
  { ampm: 'PM', location: 28.3 * 1 },
  { ampm: '', location: 28.3 * 2 },
];

export default function TimePicker() {
  const containHour = useRef(null);
  const containMinute = useRef(null);
  const containAMPM = useRef(null);

  return (
    <S.Main>
      <S.TimePickerContainer ref={containHour}>
        <S.ItemContainer>
          {Hour.map((data) => (
            <S.Item
              onClick={() => {
                //누른 값이 화면 가운데로 오게 scroll시켜주는 메소드
                containHour.current.scrollTo({
                  top: data.location,
                  behavior: 'smooth',
                });
                //일단은 console에 담아뒀습니다
                console.log(data.hour);
              }}
            >
              {data.hour}
            </S.Item>
          ))}
        </S.ItemContainer>
      </S.TimePickerContainer>

      <S.P>:</S.P>

      <S.TimePickerContainer ref={containMinute}>
        <S.ItemContainer>
          {Minute.map((data) => (
            <S.Item
              onClick={() => {
                containMinute.current.scrollTo({
                  top: data.location,
                  behavior: 'smooth',
                });
                console.log(data.minute);
              }}
            >
              {data.minute}
            </S.Item>
          ))}
        </S.ItemContainer>
      </S.TimePickerContainer>

      <S.TimePickerContainer ref={containAMPM}>
        <S.ItemContainer>
          {AMPM.map((data) => (
            <S.Item
              onClick={() => {
                containAMPM.current.scrollTo({
                  top: data.location,
                  behavior: 'smooth',
                });
                console.log(data.ampm);
              }}
            >
              {data.ampm}
            </S.Item>
          ))}
        </S.ItemContainer>
      </S.TimePickerContainer>
    </S.Main>
  );
}
