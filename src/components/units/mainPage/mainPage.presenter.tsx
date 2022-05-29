import * as S from "./mainPage.styles";
import Schedules from "../../commons/Schedules/schedules.container";
import Login from "./mainSrc/login/login.container";
import { IMainUIProps } from "./mainPage.types";
import MiniCalendar from "./mainSrc/MiniCalendar/calendar.container";
import ProjectList from "./mainSrc/projectList/projectList.container";
import ExperienceSMAF from "./mainSrc/experienceSMAF/expericence.container";

export default function MainUI(props: IMainUIProps) {
  return (
    <>
      {!props.myData ? (
        <S.Wrapper2>
          <ExperienceSMAF />
          <Login />
        </S.Wrapper2>
      ) : (
        <S.Wrapper isOpenSchedules={props.isOpenSchedules}>
          <div>
            <S.Info>
              <MiniCalendar OpenSchedules={props.OpenSchedules} />
            </S.Info>
            <S.ProjectList isOpenSchedules={props.isOpenSchedules}>
              <ProjectList />
            </S.ProjectList>
          </div>
          <S.Calender isOpenSchedules={props.isOpenSchedules}>
            <Schedules CloseSchedules={props.CloseSchedules} />
          </S.Calender>
        </S.Wrapper>
      )}
    </>
  );
}
