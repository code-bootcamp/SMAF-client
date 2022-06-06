import {
  ProjectParticipant,
  User,
} from "../../../../../commons/types/generated/types";

export interface ProjectListUIProps {
  onclickToProjectNew: () => void;
  data?: { fetchParticipatingProject: Array<ProjectParticipant> };
  mtData?: { fetchLoginUser: User };
}
