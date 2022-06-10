import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Upload01.validation";
import Uploads01UI from "./Upload01.presenter";
import { UPLOAD_FILE } from "./Upload01.queries";
import { Modal } from "antd";

export default function Uploads01(props: any) {
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
      props.setUrls(result.data.userImageUpload);
    } catch (error: any) {
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
