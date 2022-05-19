import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IQuestionProps {
  createQusetionBoard: (data: any) => void;
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  formState: any;
}
