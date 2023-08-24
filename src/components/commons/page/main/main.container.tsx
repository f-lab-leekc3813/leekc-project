import MainPageUI from "./main.presenter";

import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { IMainPageUIProps } from "./main.types";

export default function MainPage() {1

    const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
        if (dates) {
          console.log('From: ', dates[0], ', to: ', dates[1]);
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        } else {
          console.log('Clear');
        }
      };

      
    const rangePresets: IMainPageUIProps['rangePresets'] = [
      { label: 'Last 7 Days', value: [dayjs().subtract(7, 'day'), dayjs()] },
      { label: 'Last 14 Days', value: [dayjs().subtract(14, 'day'), dayjs()] },
      { label: 'Last 30 Days', value: [dayjs().subtract(30, 'day'), dayjs()] },
      { label: 'Last 90 Days', value: [dayjs().subtract(90, 'day'), dayjs()] },
    ];

    return(
        <MainPageUI
            onRangeChange = {onRangeChange}
            rangePresets = {rangePresets}
         />
    )
}