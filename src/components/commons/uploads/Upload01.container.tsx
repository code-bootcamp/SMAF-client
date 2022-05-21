import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Upload01.validation";
import Uploads01UI from "./Upload01.presenter";
import { UPLOAD_FILE } from "./Upload01.queries";
import { Modal } from "antd";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onClickUpload = () => {
        fileRef.current?.click();
    };

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = checkValidationImage(event.target.files?.[0]);
        if (!file) return;

        try {
            const result = await uploadFile({ variables: { file } });
            props.setUrls(result.data.uploadFile.url);
        } catch (error) {
            Modal.error({ content: error.message });
        }
    };

    return (
        <Uploads01UI
            fileRef={fileRef}
            fileUrl={props.fileUrl}
            defaultFileUrl={props.defaultFileUrl}
            onClickUpload={onClickUpload}
            onChangeFile={onChangeFile}
        />
    );
}
