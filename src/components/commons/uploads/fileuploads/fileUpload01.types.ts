import { ChangeEvent, RefObject } from "react";
import { ProjectFile } from "../../../../commons/types/generated/types";

export interface IProjectFileUploadUIProps {
    fileRef: RefObject<HTMLInputElement>;
    onClickSubmit: () => Promise<void>;
    urls: String;
    onClickFileUpload: () => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    fetchProjectFiles?: { fetchProjectFiles: Array<ProjectFile> };
    alertModal: boolean;
    modalContents: string | undefined;
    errorAlertModal: boolean;
    onClickExitSubmitModal: () => void;
    onClickExitErrorModal: () => void;
}
