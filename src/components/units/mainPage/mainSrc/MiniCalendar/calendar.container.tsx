import * as S from "./calendar.styles";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { useRecoilState } from "recoil";
import { dateValue } from "../../../../../commons/store";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SCHEDULES } from "./calendar.querys";

export default function MiniCalendar() {
  const [value, onChange] = useRecoilState(dateValue);
  const [mark, setMark] = useState<string[]>([]);

  const { data: schedulesData } = useQuery(FETCH_SCHEDULES);

  const dateArray = () => {
    const daysArray: any = [];
    schedulesData?.fetchSchedules.forEach((el: any) => {
      daysArray.push(el.createAt.slice(0, 10), el.scheduleDate.slice(0, 10));
    });
    setMark([...daysArray]);
  };

  useEffect(() => {
    dateArray();
  }, [schedulesData]);

  return (
    <>
      <S.MiniCalendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <div className="dotBox">
                <div className="dot"></div>
              </div>
            );
          }
        }}
      />
    </>
  );
}
