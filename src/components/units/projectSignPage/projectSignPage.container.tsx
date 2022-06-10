import ProjectSignPageUI from "./projectSignPage.presenter";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
import { checkValidationImage } from "../../commons/uploads/upload1/Upload01.validation";
import { CreateProjectInput, Query, QueryFetchProjectArgs, UpdateProjectInput } from "../../../commons/types/generated/types";

const schema = yup.object({
  projectName: yup.string().required("필수 입력 사항입니다."),
  remarks: yup
    .string()
    .max(150, "150자 이내로 입력해주세요")
    .required("필수 입력 사항입니다."),
  contents: yup.string(),
  detailAddress: yup.string(),
});

const editSchema = yup.object({
  projectName: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  detailAddress: yup.string(),
});

export default function ProjectSign(props: any) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [createProject] = useMutation(CREATE_PROJECT);
  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery<Pick<Query, "fetchProject">, QueryFetchProjectArgs | undefined>(FETCH_PROJECT, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });

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

  // 얼럿모달
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [go, setGo] = useState(false);

  // 이미지 업로드 state
  const [urls, setUrls] = useState("");

  // 색깔 선택 state
  const [color, setColor] = useState<undefined | string>();

  // 시작일 종료일 state
  const [fromValue] = useRecoilState<string>(fromValues);
  const [toValue] = useRecoilState<string>(toValues);

  // 주소 state
  const [address, setAddress] = useState<string | null>("");

  const [submit, setSubmit] = useState();
  const [update, setUpdate] = useState<string | string[] | undefined>();

  // 등록하기 모달 라우터
  const onClickExitSubmitModal = () => {
    setAlertModal(false);
    router.push(`/project/${submit}`);
  };

  // 수정하기 모달 라우터
  const onClickExitUpdateModal = () => {
    setAlertModal(false);
    router.push(`/project/${update}`);
  };

  // 에러 모달
  const onClickExitErrorModal = () => {
    setErrorAlertModal(false);
  };

  // 모달 주소입력
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setIsOpen(false);
    setAddress(data.address);
  };

  const onChangeContents = (value: any) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

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
      setUrls(result.data.projectImageUpload);
    } catch (error) {
      let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        setModalContents(message);
        setErrorAlertModal(true);
    }
  };

  // 등록하기
  const onClickSubmit = async (data: CreateProjectInput) => {
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
            status: true,
          },
        });
        setModalContents("프로젝트 등록이 완료되었습니다!");
        setAlertModal(true);
        setGo(true);
        setSubmit(result.data.createProject.projectId);
      } catch (error: any) {
        setModalContents(error.message);
        setErrorAlertModal(true);
      }
    }
  };

  // 수정하기
  const onClickUpdate = async (data: UpdateProjectInput) => {
    const currentFiles = urls;
    const defaultFiles = data.fetchProject?.projectImageURL;
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.projectName &&
      !data.remarks &&
      !data.contents &&
      !isChangedFiles
    ) {
      setModalContents("수정한 내용이 없습니다.");
      setErrorAlertModal(true);
    }

    try {
      await updateProject({
        variables: {
          projectId: router.query.projectId,
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
          status: true,
        },
      });
      setModalContents("프로젝트 수정이 완료되었습니다!");
      setAlertModal(true);
      setGo(false);
      setUpdate(router.query.projectId);
    } catch (error: any) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  //  이미지
  useEffect(() => {
    if (data?.fetchProject.projectImageURL?.length) {
      setUrls(data?.fetchProject.projectImageURL);
    }
    setValue("projectName", data?.fetchProject?.projectName);
    setValue<string>("remarks", data?.fetchProject?.remarks);
    setValue("detailAddress", data?.fetchProject.address.detailAddress);
    setAddress(data?.fetchProject.address.address);
  }, [data]);

  return (
    <ProjectSignPageUI
      isOpen={isOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      address={address}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
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
      onClickExitSubmitModal={onClickExitSubmitModal}
      onClickExitUpdateModal={onClickExitUpdateModal}
      alertModal={alertModal}
      modalContents={modalContents}
      go={go}
      onClickExitErrorModal={onClickExitErrorModal}
      errorAlertModal={errorAlertModal}
    />
  );
}
