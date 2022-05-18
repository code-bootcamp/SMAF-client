import * as S from "./main.styles";
import TeamMember from "../../../commons/teamMember/teamMember.container";
import MiniCalendar from "../mainSrc/MiniCalendar/calendar.container";
import ProjectList from "../mainSrc/projectList/projectList.container";
import Schedules from "../../../commons/Schedules/schedules.container";

export default function MainUI() {
  return (
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
  );
}
