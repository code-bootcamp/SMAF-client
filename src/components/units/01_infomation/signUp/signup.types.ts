import { ChangeEvent } from "react";
import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";

export interface FormValues {
    userImageURL: string;
    email: string;
    password: string;
    confirmPassword: string;
    userName: string;
    phone: string;
    inputToken: string;
}

export interface ISignupUIProps {
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickcreateUser: (data: FormValues) => Promise<void>;
    onClickSendTokenPhone: () => void;
    onClickTokenCheck: () => void;
    onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
    setUrls: any;
    urls?: String;
    // 모달
    alertModal: boolean;
    errorAlertModal: boolean;
    modalContents: string | undefined;
    onClickRoutingModal: () => void;
    onClickconfirmModal: () => void;
    onClickErrorModal: () => void;
    go: boolean;
}
