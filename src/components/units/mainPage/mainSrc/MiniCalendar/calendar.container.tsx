import * as S from './calendar.styles'
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { useRecoilState } from 'recoil';
import { dateValue } from '../../../../../commons/store';
import { useState } from 'react';

export default function MiniCalendar(){

    const [value, onChange] = useRecoilState(dateValue)
    const [mark, setMark] = useState(["2022-05-25", "2022-05-28", "2022-05-30"]);

    return(
    <>
      <S.MiniCalendar  
      onChange={onChange} 
      value={value} 
      formatDay={(locale, date) => moment(date).format("DD")}
      tileContent={({ date, view }) => {
        if(mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          return (
            <div className="dotBox">
              <div className="dot"></div>
            </div>
        );
        }
      }}
      />
    </>
    )
}