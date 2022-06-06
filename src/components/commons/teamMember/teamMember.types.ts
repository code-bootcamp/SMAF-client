import { MouseEvent } from "react";
import {
  ProjectParticipant,
  User,
} from "../../../commons/types/generated/types";
export interface TeamMemberUIProps {
  partcipatingData?: { fetchParticipatingUser: Array<ProjectParticipant> };
  myData?: { fetchLoginUser: User };
  DeleteParticipant: (event: MouseEvent<HTMLButtonElement>) => void;
}
