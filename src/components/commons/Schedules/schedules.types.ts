import {
  ProjectParticipant,
  User,
} from "../../../commons/types/generated/types";

export interface SchedulesProps {
  CloseSchedules: () => void;
}

export interface SchedulesUIProps {
  value: Date;
  myData?: { fetchLoginUser: User };
  ParticipatingData?: { fetchParticipatingProject: Array<ProjectParticipant> };
  CloseSchedules: () => void;
  onClickBefore: () => void;
  onClickAfter: () => void;
  onClickToProjectSignUp: () => void;
}
