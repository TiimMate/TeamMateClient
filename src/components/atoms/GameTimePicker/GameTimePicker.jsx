import React, { useRef } from 'react';
import * as S from '../TimePicker/TimePicker.style';
import styled from 'styled-components';

const Minute = [
  { minute: '', location: 0 },
  { minute: '00:30', location: 0 },
  { minute: '01:00', location: 28.3 * 1 },
  { minute: '01:30', location: 28.3 * 2 },
  { minute: '02:00', location: 28.3 * 3 },
  { minute: '02:30', location: 28.3 * 4 },
  { minute: '03:00', location: 28.3 * 5 },
  { minute: '03:30', location: 28.3 * 6 },
  { minute: '04:00', location: 28.3 * 7 },
  { minute: '04:30', location: 28.3 * 8 },
  { minute: '05:00', location: 28.3 * 9 },
  { minute: '05:30', location: 28.3 * 10 },
  { minute: '06:00', location: 28.3 * 11 },
  { minute: '', location: 28.3 * 12 },
];

let GameTime = '';
export default function GameTimePicker(props) {
  const containMinute = useRef(null);
  return (
    <Main>
      <TimePickerContainer ref={containMinute}>
        <S.ItemContainer>
          {Minute.map((data) => (
            <Item
              onClick={() => {
                containMinute.current.scrollTo({
                  top: data.location,
                  behavior: 'smooth',
                });
                GameTime = data.minute;
                props.setGameTime(GameTime);
              }}
            >
              {data.minute}
            </Item>
          ))}
        </S.ItemContainer>
      </TimePickerContainer>
    </Main>
  );
}

const Main = styled.div`
  padding-bottom: 40px;
`;

const TimePickerContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 85px;
  margin: 23px;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  border-top: 1px solid var(--Gray200, #d9d9d9);
  border-bottom: 1px solid var(--Gray200, #d9d9d9);
`;

const Item = styled.li`
  height: 28.3px;
  width: 100px;

  color: var(--Neutral-Black, #061119);
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.048px;
`;
