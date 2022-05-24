import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IAddColumnBtnProps {
  CreateProjectCategory: (data: any) => void;
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  formState: any;
  onToggleModal: () => any;
  isOpen: boolean;
  reset: any;
}
