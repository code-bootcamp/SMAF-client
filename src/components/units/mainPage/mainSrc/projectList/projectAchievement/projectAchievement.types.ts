import { MouseEvent } from "react";
import {
  ProjectParticipant,
  Schedule,
} from "../../../../../../commons/types/generated/types";

export interface ProjectAchievementProps {
  el: ProjectParticipant;
}

export interface IProjectAchievementHTMLProps {
  result: number;
  el: ProjectParticipant;
  schedulesData?: { fetchProjectSchedules: Array<Schedule> };
  dday: number;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
