import { UploadButton, UploadFileHidden, UploadImage } from "./Upload01.styles";

export default function Uploads01UI(props) {
    console.log("살려줘", props.fileUrl);
    return (
        <>
            {props.fileUrl ? (
                <UploadImage
                    onClick={props.onClickUpload}
                    src={`https://storage.cloud.google.com/teamproject_storage/userImage/${props.fileUrl}`}
                />
            ) : (
                <UploadButton onClick={props.onClickUpload}></UploadButton>
            )}
            <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
        </>
    );
}
