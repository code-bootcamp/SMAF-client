import { ChangeEvent } from "react";
import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";

export interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    inputToken: string;
}

export interface IChangePasswordUIProps {
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSendTokenPhone: () => void;
    onClickTokenCheck: () => void;
    isActive: boolean;
    onClickUpdatePassword: (data: FormValues) => Promise<void>;
    alertModal: boolean;
    modalContents: string | undefined;
    go: boolean;
    onClickRouterAlertModal: () => void;
    onClickRoutingModal: () => void;
    onClickConfirmModal: () => void;
    onClickErrorModal: () => void;
    errorAlertModal: boolean;
    data?: any;
}
