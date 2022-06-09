import { FormValues } from './../01_infomation/signUp/signup.types';
import { CreateProjectInput, Query, UpdateProjectInput } from './../../../commons/types/generated/types';
import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReset,
    UseFormStateReturn,
} from "react-hook-form";
import { Dispatch, SetStateAction, RefObject } from 'react';


export interface IProjectSignPresenterProps {
    isOpen: boolean;
    showModal: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    handleComplete: (data:any) => void;
    address:string | null;
    onChangeContents:(value:any) => void;
    onClickSubmit:(data: CreateProjectInput) => Promise<void>;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: UseFormStateReturn<FieldValues>;
    getValues: any; 
    reset: UseFormReset<FormValues>;
    color: string | undefined;
    setColor: Dispatch<SetStateAction<string | undefined>>;
    onClickUpload: () => void;
    setUrls: Dispatch<SetStateAction<string>>;
    urls: string;
    onChangeFile: (event:any) => void;
    isEdit: boolean;
    fileRef: RefObject<HTMLInputElement>;
    onClickUpdate: (data: UpdateProjectInput) => Promise<void>
    data: Pick<Query, "fetchProject"> | undefined
    onClickExitSubmitModal: () => void;
    onClickExitUpdateModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    go:boolean;
    onClickExitErrorModal:() => void;
    errorAlertModal:boolean;
}