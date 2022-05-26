import MainUI from "./mainPage.presenter";
import { FETCH_LOGIN_USER } from "./mainPage.querys";
import { useQuery } from "@apollo/client";

export default function Main() {
  const { data: myData } = useQuery(FETCH_LOGIN_USER);

  return <MainUI myData={myData} />;
}
