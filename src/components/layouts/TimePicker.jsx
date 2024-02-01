import * as React from 'react';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';

export default function TimePicker() {
  const [value, setValue] = React.useState(dayjs('2022-04-17T20:00'));

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DigitalClock', 'MultiSectionDigitalClock']}
        >
          <DemoItem>
            <MultiSectionDigitalClock
              value={value}
              onChange={(value) => setValue(value)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      {JSON.stringify(value)}
    </div>
  );
}
