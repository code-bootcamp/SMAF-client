import { ChangeEvent, useState, useRef } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../types/generated/types";
import { checkFileValidation } from "./validation";
import ImageSignHTML from "./imageSign.presenter";
// import * as S from "./imageSign.styles";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageSignPage(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  // const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [isActive, setIsActive] = useState(false);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myfile = event.target.files?.[0]; // myfile => file
    console.log(myfile);

    const isValid = checkFileValidation(myfile);
    if (!isValid) return; // true면 아래 try실행

    try {
      const result = await uploadFile({
        // 백엔드 스토리지에 저장하고 다시 가져온다.
        variables: { file: myfile }, // { file: file } => { file }
      });
      console.log(result.data?.uploadFile.url);

      props.setImageUrl(result.data?.uploadFile.url);

      setIsActive(true);
    } catch (error) {
      // Modal.error({content: error.message});
      console.log("error");
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <ImageSignHTML
      fileRef={fileRef}
      imageUrl={props.imageUrl}
      isActive={isActive}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
    />
  );
}
