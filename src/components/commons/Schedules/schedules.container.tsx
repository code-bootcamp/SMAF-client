import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { dateValue } from "../../../commons/store";
import SchedulesUI from "./schedules.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_PARTICIPATING_PROJECTS,
  FETCH_LOGIN_USER,
} from "./schedules.querys";

export default function Schedules() {
  const router = useRouter();
  const { data: ParticipatingData } = useQuery(FETCH_PARTICIPATING_PROJECTS);
  const { data: myData } = useQuery(FETCH_LOGIN_USER);
  const [value, onChange] = useRecoilState(dateValue);

  const onClickBefore = () => {
    onChange(new Date(value.setDate(value.getDate() - 1)));
  };

  const onClickAfter = () => {
    onChange(new Date(value.setDate(value.getDate() + 1)));
  };

  const onClickToProjectSignUp = () => {
    router.push("/project/new");
  };
  //   console.log(ParticipatingData);
  return (
    <SchedulesUI
      value={value}
      myData={myData}
      onClickBefore={onClickBefore}
      onClickAfter={onClickAfter}
      onClickToProjectSignUp={onClickToProjectSignUp}
      ParticipatingData={ParticipatingData}
    />
  );
}
