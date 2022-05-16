import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IQuestionProps {
  createQusetionBoard: any;
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  formState: any;
}
