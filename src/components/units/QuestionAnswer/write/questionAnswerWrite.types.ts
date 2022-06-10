import { CreateQuestionBoardInput } from '../../../../commons/types/generated/types';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateReturn,
} from "react-hook-form";

export interface IQuestionProps {
  CreateNewQusetionBoard: (data: CreateQuestionBoardInput) => void;
  onClickExitSubmitModal: () => void;
  onClickExitErrorModal: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  alertModal: boolean;
  modalContents: string | undefined;
  errorAlertModal: boolean;
}

export interface QuestionAnswerWriteProps {}
