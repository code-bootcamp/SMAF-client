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
import { MiniCalendarProps } from "./calendar.types";
import {
  ProjectParticipant,
  Schedule,
} from "../../../../../commons/types/generated/types";

export default function MiniCalendar(props: MiniCalendarProps) {
  const [value, onChange] = useRecoilState(dateValue);
  const [mark, setMark] = useState<string[]>([]);

  const { data: schedulesData } = useQuery(FETCH_SCHEDULES);
  const { data: participatingData } = useQuery(FETCH_PARTICIPATING_PROJECTS);

  const dateArray = () => {
    const daysArray: string[] = [];

    participatingData?.fetchParticipatingProject.forEach(
      (project: ProjectParticipant) => {
        schedulesData?.fetchSchedules.forEach((el: Schedule) => {
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
      }
    );
    setMark([...daysArray]);
  };

  useEffect(() => {
    dateArray();
  }, [schedulesData, participatingData]);

  return (
    <>
      <S.MiniCalendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        // @ts-ignore
        tileContent={({ date }) => {
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
