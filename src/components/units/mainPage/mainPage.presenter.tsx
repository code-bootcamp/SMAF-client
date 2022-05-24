import * as S from "./mainPage.styles";
import Schedules from "../../commons/Schedules/schedules.container";
import Login from "./mainSrc/login/login.container";
import { IMainUIProps } from "./mainPage.types";
import MiniCalendar from "./mainSrc/MiniCalendar/calendar.container";
import ProjectList from "./mainSrc/projectList/projectList.container";
import TeamMember from "../../commons/teamMember/teamMember.container";

export default function MainUI(props: IMainUIProps) {
  console.log(props.myData?.fetchLoginUser.userId);
  return (
    <>
      {!props.myData?.fetchLoginUser?.userId ? (
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
            <S.Info>
              <TeamMember />
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
