import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { MutationCreateProcessCategoryArgs } from "../../../../commons/types/generated/types";
export interface AddColumnBtnProps {
  projectId: string;
}
export interface AddColumnBtnHTMLProps {
  CreateProjectCategory: (data: MutationCreateProcessCategoryArgs) => Promise<void>
  onClickErrorModal: () => void;
  onToggleModal: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  reset: UseFormReset<FieldValues>;
  errorAlertModal: boolean;
  modalContents: string;
  isOpen: boolean;
}
