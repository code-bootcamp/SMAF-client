import {
  ProcessCategory,
  ProjectParticipant,
} from "../../../../commons/types/generated/types";
export interface IDetailPlanListColumnProps {
  el: ProcessCategory;
  scheduleArray: string[];
  dragItemId: string;
  tableIndex: number;
}

export interface IDetailPlanListColumnHTMLProps {
  DeleteCategory: () => void;
  columnData: ProcessCategory;
  dragItemId: string;
  my: any;
  scheduleArray: string[];
  errorAlertModal: boolean;
  modalContents: string | undefined;
  onClickErrorModal: () => void;
  participatingData?: { fetchParticipatingUser: Array<ProjectParticipant> };
}
