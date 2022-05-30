import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IAddColumnBtnProps {
    CreateProjectCategory: (data: any) => void;
    onClickErrorModal: () => any;
    handleSubmit: any;
    register: UseFormRegister<FieldValues>;
    formState: any;
    onToggleModal: () => any;
    errorAlertModal: () => any;
    modalContents: () => void;
    isOpen: boolean;
    reset: any;
}
