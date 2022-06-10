import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";
import { MutationLoginArgs } from "../../../../../commons/types/generated/types";

export interface FormValues {
    email?: string;
    password?: string;
}

export interface ILoginUIProps {
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickLogin: (data: MutationLoginArgs) => Promise<void>;
    clickMeGoogle: () => void;
    clickMeNaver: () => void;
    clickMeKakao: () => void;
    MoveToPage: (path: string) => () => void;
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
}
