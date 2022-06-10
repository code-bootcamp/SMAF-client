import { UploadButton, UploadFileHidden, UploadImage } from "./Upload01.styles";

export default function Uploads01UI(props: any) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}></UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
