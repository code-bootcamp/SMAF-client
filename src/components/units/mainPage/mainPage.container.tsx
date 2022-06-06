import MainUI from "./mainPage.presenter";

import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "./mainPage.querys";
import { useState } from "react";
import { User } from "../../../commons/types/generated/types";

export default function Main() {
  const { data: myData } = useQuery<{ fetchLoginUser: User }>(FETCH_LOGIN_USER);
  const [isOpenSchedules, setIsOpenSchedules] = useState(false);

  const OpenSchedules = () => {
    setIsOpenSchedules(true);
  };
  const CloseSchedules = () => {
    setIsOpenSchedules(false);
  };
  return (
    <MainUI
      myData={myData}
      OpenSchedules={OpenSchedules}
      isOpenSchedules={isOpenSchedules}
      CloseSchedules={CloseSchedules}
    />
  );
}
