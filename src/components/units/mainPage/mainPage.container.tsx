import MainUI from "./mainPage.presenter";

import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../../../commons/loginUserQuery/loginUerQuery";

export default function Main() {
  const { data: myData } = useQuery(FETCH_LOGIN_USER);

  return <MainUI myData={myData} />;
}
