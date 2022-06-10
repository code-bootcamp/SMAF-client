import {
  ProcessCategory,
  ProjectParticipant,
  Schedule,
} from "../../../../commons/types/generated/types";
export interface IDetailPlanListColumnProps {
  el: ProcessCategory;
  scheduleArray: Schedule[];
  dragItemId: string;
  tableIndex: number;
}

export interface IDetailPlanListColumnHTMLProps {
  DeleteCategory: () => void;
  columnData: ProcessCategory;
  dragItemId: string;
  my: any;
  scheduleArray: Schedule[];
  errorAlertModal: boolean;
  modalContents: string | undefined;
  onClickErrorModal: () => void;
  participatingData?: { fetchParticipatingUser: Array<ProjectParticipant> };
}
