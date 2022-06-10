import {
  ProjectParticipant,
  User,
} from "../../../commons/types/generated/types";

export interface IMyPageUIProps {
  visible: boolean;
  activeData?: { fetchActivatedProject: Array<ProjectParticipant> };
  inActiveData?: { fetchInactivatedProject: Array<ProjectParticipant> };
  userData?: { fetchLoginUser: User };
  onClickMoveToNewProject: () => void;
  onClickMoveToPaymentList: () => void;
  onClickMoveToMyPage: () => void;
  onClickMoveToPasswordChange: () => void;
}
