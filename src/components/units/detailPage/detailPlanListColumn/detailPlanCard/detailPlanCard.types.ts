import {
  ProjectParticipant,
  User,
} from "../../../../../commons/types/generated/types";

export interface DetailPlanCardHTMLProps {
  el: any;
  userData?: { fetchUser: User };
  myData?: { fetchLoginUser: User };
  dragItemId: string;
  participatingData?: { fetchParticipatingUser: Array<ProjectParticipant> };
}
