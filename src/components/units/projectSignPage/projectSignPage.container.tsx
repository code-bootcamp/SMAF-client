import ProjectSignPageUI from "./projectSignPage.presenter";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PROJECT } from "./projectSignPage.queries";
import { useRecoilState } from "recoil";
import { fromValues, toValues } from "../../../commons/store";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), {ssr : false});

const schema = yup.object({
  projectName: yup
    .string()
    .required("필수 입력 사항입니다."),
  remarks: yup.string().max(150, "150자 이내로 입력해주세요").required("필수 입력 사항입니다."),
  contents: yup.string().max(1000, "100자 이내로 입력해주세요"),
});


export default function ProjectSign() {

  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)

  const [ createProject ] = useMutation(CREATE_PROJECT)

  const { register, handleSubmit, formState, setValue, trigger, getValues } = useForm({
        resolver: yupResolver(schema),
        mode:"onChange",   
  });

  // 이미지 업로드 state
  const [fileUrls, setFileUrls] = useState([""]);
  
  // 색깔 선택 state
  const [color, setColor] = useState<undefined | string>()
  
  // 시작일 종료일 state
  const [fromValue, ] = useRecoilState<string>(fromValues);
  const [toValue, ] = useRecoilState<string>(toValues);
  
  // 주소 state
  const [ address, setAddress] = useState("")
  const [ addressDetail, setAddressDetail] = useState("")
  
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

  const handleComplete = (data:any) =>{
    setIsOpen(false);
    setAddress(data.address)
  }

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };
  
  const onChangeContents = (value: any) =>{
      setValue("contents", value === "<p><br></p>" ? "" : value);
      trigger("contents");
  };

  // 이미지 업로드
  const onClickImg = () => {
        fileRef.current?.click()
  }

  // 이미지 등록하기
    const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 등록하기
  const onClickSubmit = async(data:any) => {
    if(data){
      try{
        const result = await createProject({
          variables: {
            createProjectInput:{
              projectName: data.projectName,
              projectIntro: data.remarks,
              projectDetailIntro: data.contents,
              projectImageURL: fileUrls[0],
              projectColor: color,
              startDate: fromValue,
              endDate: toValue,
              projectAddress: {
                  address: address, 
                  detailAddress: addressDetail,
              },
            },
          }
        })           
        alert("성공")
        console.log(result)
        router.push(`/project/${result.data.createProject.projectId}`)
      }catch(error){
        alert(error)
      }
    }
  }

  return (
    <ProjectSignPageUI 
        isOpen={isOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleComplete={handleComplete}
        address={address}
        addressDetail={addressDetail}
        setAddress={setAddress}
        onChangeAddressDetail={onChangeAddressDetail}

        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}

        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        ReactQuill={ReactQuill}
        getValues={getValues}

        color={color}
        setColor={setColor}

        onClickImg={onClickImg}
        fileRef={fileRef}

        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
      />
    )
}
