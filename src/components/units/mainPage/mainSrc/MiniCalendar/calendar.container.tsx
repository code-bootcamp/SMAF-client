import * as S from "./calendar.styles";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { useRecoilState } from "recoil";
import { dateValue } from "../../../../../commons/store";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  FETCH_SCHEDULES,
  FETCH_PARTICIPATING_PROJECTS,
} from "./calendar.querys";

export default function MiniCalendar(props: any) {
  const [value, onChange] = useRecoilState(dateValue);
  const [mark, setMark] = useState<string[]>([]);

  const { data: schedulesData } = useQuery(FETCH_SCHEDULES);
  const { data: participatingData } = useQuery(FETCH_PARTICIPATING_PROJECTS);
  console.log(participatingData, "참가 프로젝트");
  console.log(schedulesData, "모든일정");

  const dateArray = () => {
    const daysArray: any = [];

    participatingData?.fetchParticipatingProject.forEach((project: any) => {
      schedulesData?.fetchSchedules.forEach((el: any) => {
        if (
          project.project?.projectId === el.project?.projectId &&
          !daysArray.includes(
            el.createAt.slice(0, 10),
            el.scheduleDate.slice(0, 10)
          )
        ) {
          daysArray.push(
            el.createAt.slice(0, 10),
            el.scheduleDate.slice(0, 10)
          );
        }
      });
    });
    console.log(daysArray, "aaaa");
    setMark([...daysArray]);
  };

  // const dateArray = () => {
  //   const daysArray: any = [];
  //   schedulesData?.fetchSchedules.forEach((el: any) => {
  //     daysArray.push(el.createAt.slice(0, 10), el.scheduleDate.slice(0, 10));
  //   });
  //   // console.log(daysArray);
  //   setMark([...daysArray]);
  // };

  useEffect(() => {
    dateArray();
  }, [schedulesData, participatingData]);

  return (
    <>
      <S.MiniCalendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <div onClick={props.OpenSchedules} className="dotBox">
                <div className="dot"></div>
              </div>
            );
          }
        }}
      />
    </>
  );
}
