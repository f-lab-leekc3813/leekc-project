import { Dayjs } from 'dayjs'; 

export interface IMainPageUIProps {
    onRangeChange: (dates: (Dayjs | null)[], dateStrings: string[]) => void;
    rangePresets: {
        label: string;
        value: [Dayjs, Dayjs];
    }[];
}

export interface IQuestionProps {
    key : string;
    data : {
        index : string;
        title : string;
        content : string;
    }
}