import MainUI from "./mainPage.presenter";

import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "./mainPage.querys";
import { useState } from "react";

export default function Main() {
  const { data: myData } = useQuery(FETCH_LOGIN_USER);
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
