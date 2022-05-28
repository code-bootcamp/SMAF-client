import * as S from "./mainPage.styles";
import Schedules from "../../commons/Schedules/schedules.container";
import Login from "./mainSrc/login/login.container";
import { IMainUIProps } from "./mainPage.types";
import MiniCalendar from "./mainSrc/MiniCalendar/calendar.container";
import ProjectList from "./mainSrc/projectList/projectList.container";

export default function MainUI(props: IMainUIProps) {
  return (
    <>
      {!props.myData ? (
        <S.Wrapper>
          <Schedules />
          <Login />
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <div>
            <S.Info>
              <MiniCalendar />
            </S.Info>
            <S.Info>
              <ProjectList />
            </S.Info>
          </div>
          <S.Calender>
            <Schedules />
          </S.Calender>
        </S.Wrapper>
      )}
    </>
  );
}
