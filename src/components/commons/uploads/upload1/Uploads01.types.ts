import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
    index: number;
    fileUrl: string;
    defaultFileUrl?: string;
    onChangeUrls?: any;
    onChangeFileUrls?: any;
    setUrls: any;
}

export interface IUploads01UIProps {
    fileRef: RefObject<HTMLInputElement>;
    fileUrl: string;
    defaultFileUrl?: string;
    onClickUpload: () => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
