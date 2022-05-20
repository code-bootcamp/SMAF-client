import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IQuestionProps {
  CreateNewQusetionBoard: (data: any) => void;
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  formState: any;
}
