import { User } from "../../../commons/types/generated/types";

export interface IMainUIProps {
  myData?: { fetchLoginUser: User };
  isOpenSchedules: boolean;
  OpenSchedules: () => void;
  CloseSchedules: () => void;
}
