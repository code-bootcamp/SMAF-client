import ProjectSignPageUI from "./projectSignPage.presenter";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PROJECT,
  FETCH_PROJECT,
  UPDATE_PROJECT,
  UPLOAD_FILE,
} from "./projectSignPage.queries";
import { useRecoilState } from "recoil";
import { fromValues, toValues } from "../../../commons/store";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { checkValidationImage } from "../../commons/uploads/upload1/Upload01.validation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const schema = yup.object({
  projectName: yup.string().required("필수 입력 사항입니다."),
  remarks: yup
    .string()
    .max(150, "150자 이내로 입력해주세요")
    .required("필수 입력 사항입니다."),
  contents: yup.string().max(1000, "100자 이내로 입력해주세요"),
  detailAddress: yup.string(),
});

const editSchema = yup.object({
  projectName: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  detailAddress: yup.string(),
});

export default function ProjectSign(props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [createProject] = useMutation(CREATE_PROJECT);
  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_PROJECT, {
    variables: {
      projectId: router.query.projectId,
    },
  });

  console.log(data);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(props.isEdit ? editSchema : schema),
    mode: "onChange",
  });

  // // 이미지 업로드 state
  // const [urls, setUrls] = useState("");

  // // 색깔 선택 state
  // const [color, setColor] = useState<undefined | string>()

  // // 시작일 종료일 state
  // const [fromValue, ] = useRecoilState<string>(fromValues);
  // const [toValue, ] = useRecoilState<string>(toValues);

  // // 주소 state
  // const [ address, setAddress] = useState("")
  // // const [ addressDetail, setAddressDetail] = useState("")

  // // 모달 주소입력
  // const [isOpen, setIsOpen] = useState(false);

  // const showModal = () => {
  //   setIsOpen(true);
  // };

  // const handleOk = () => {
  //   setIsOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsOpen(false);
  // };

  // const handleComplete = (data:any) =>{
  //   setIsOpen(false);
  //   setAddress(data.address)
  //   console.log('주소', address)
  // }

  // const onChangeContents = (value: any) =>{
  //     setValue("contents", value === "<p><br></p>" ? "" : value);
  //     trigger("contents");
  // };

  //   // 이미지 업로드 state
  //   const [urls, setUrls] = useState();

  //   // 색깔 선택 state
  //   const [color, setColor] = useState<undefined | string>();

  //   // 시작일 종료일 state
  //   const [fromValue] = useRecoilState<string>(fromValues);
  //   const [toValue] = useRecoilState<string>(toValues);

  //   // 주소 state
  //   const [address, setAddress] = useState("");
  //   const [addressDetail, setAddressDetail] = useState("");

  //   // 모달 주소입력
  //   const [isOpen, setIsOpen] = useState(false);

  //   const showModal = () => {
  //       setIsOpen(true);
  //   };

  //   const handleOk = () => {
  //       setIsOpen(false);
  //   };

  //   const handleCancel = () => {
  //       setIsOpen(false);
  //   };

  //   const handleComplete = (data: any) => {
  //       setIsOpen(false);
  //       setAddress(data.address);
  //   };

  //   const onChangeAddressDetail = (event) => {
  //       setAddressDetail(event.target.value);
  //   };

  //   const onChangeContents = (value: any) => {
  //       setValue("contents", value === "<p><br></p>" ? "" : value);
  //       trigger("contents");
  //   };

  // 이미지 업로드
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  // 이미지 등록하기
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setUrls(result.data.userImageUpload);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // 등록하기
  const onClickSubmit = async (data: any) => {
    // console.log("등록데이터", urls)
    if (data) {
      try {
        const result = await createProject({
          variables: {
            createProjectInput: {
              projectName: data.projectName,
              projectIntro: data.remarks,
              projectDetailIntro: data.contents,
              projectImageURL: urls,
              projectColor: color,
              startDate: fromValue,
              endDate: toValue,
              projectAddress: {
                address: address,
                detailAddress: data.detailAddress,
              },
            },
          },
        });
        alert("성공");
        router.push(`/project/${result.data.createProject.projectId}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    }
  };

  // 수정하기
  const onClickUpdate = async (data: any) => {
    // 이미지 수정하기
    // const currentFiles = JSON.stringify(urls);
    // const defaultFiles = JSON.stringify(data.fetchProject?.projectImageURL);
    // const isChangedFiles = currentFiles !== defaultFiles;

    const currentFiles = urls;
    const defaultFiles = data.fetchProject?.projectImageURL;
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.projectName &&
      !data.remarks &&
      !data.contents &&
      !isChangedFiles
    ) {
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
    }

    // const updateProjectInput = {}
    // if (data.projectName) updateProjectInput.projectName = data.projectName;
    // if (data.remarks) updateProjectInput.projectIntro = data.remarks;
    // if (data.contents) updateProjectInput.projectDetailIntro = data.contents;
    // if (color) updateProjectInput.projectColor = color;
    // if (isChangedFiles) updateProjectInput.projectImageURL = urls?.[0];
    // if (fromValue) updateProjectInput.startDate = fromValue;
    // if (toValue) updateProjectInput.endDate = toValue;

    // const projectAddressInput= {}
    // if (address) projectAddressInput.address = address;
    // if (data.detailAddress) projectAddressInput.detailAddress = data.detailAddress;

    try {
      const updateResult = await updateProject({
        variables: {
          projectId: router.query.projectId,
          projectAddress: {
            projectAddressId: "4adc997f-8d56-4f58-865a-c1406a8aa0f5",
          },
          updateProjectInput: {
            projectName: data.projectName,
            projectIntro: data.remarks,
            projectDetailIntro: data.contents,
            projectImageURL: urls,
            projectColor: color,
            startDate: fromValue,
            endDate: toValue,
            projectAddress: {
              address: address,
              detailAddress: data.detailAddress,
            },
          },
        },
      });
      Modal.success({
        content: "수정이 완료되었습니다!",
      });
      console.log("업데이트", updateResult);
      router.push(`/project/${router.query.projectId}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  //  이미지
  useEffect(() => {
    if (data?.fetchProject.projectImageURL?.length) {
      setUrls(data?.fetchProject.projectImageURL);
    }
    setValue("projectName", data?.fetchProject?.projectName);
    setValue("remarks", data?.fetchProject?.remarks);
    setValue("detailAddress", data?.fetchProject.address.detailAddress);
    setAddress(data?.fetchProject.address.address);
  }, [data]);

  console.log("요기요", urls);

  return (
    <ProjectSignPageUI
      isOpen={isOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      address={address}
      setAddress={setAddress}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      ReactQuill={ReactQuill}
      getValues={getValues}
      reset={reset}
      color={color}
      setColor={setColor}
      onClickUpload={onClickUpload}
      fileRef={fileRef}
      setUrls={setUrls}
      urls={urls}
      onChangeFile={onChangeFile}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={data}
    />
  );
}
