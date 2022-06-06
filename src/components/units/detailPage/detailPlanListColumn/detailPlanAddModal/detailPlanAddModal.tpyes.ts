import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ProcessCategory } from "../../../../../commons/types/generated/types";

export interface DetailPlanAddModalProps {
  onToggleModal: () => void;
  categoryId: string;
}

export interface DetailPlanAddModalHTMLProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  CreateNewSchedule: (data: ProcessCategory) => Promise<void>;
  onClickConfirmModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string | undefined;
  errorAlertModal: boolean;
}
