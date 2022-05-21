import ProjectSignPageUI from "./projectSignPage.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PROJECT, FETCH_USER } from "./projectSignPage.queries";
import { useRecoilState } from "recoil";
import { fromValues, toValues } from "../../../commons/store";

const ReactQuill = dynamic(() => import("react-quill"), {ssr : false});

const schema = yup.object({
  projectName: yup
    .string()
    .required("필수 입력 사항입니다."),
  remarks: yup.string().max(150, "150자 이내로 입력해주세요"),
  contents: yup.string().max(1000, "100자 이내로 입력해주세요"),
});


export default function ProjectSign() {

  const { data } = useQuery(FETCH_USER)

  console.log("유저", data)

  const [ createProject ] = useMutation(CREATE_PROJECT)

  const { register, handleSubmit, formState, setValue, trigger, getValues } = useForm({
        resolver: yupResolver(schema),
        mode:"onChange",   
  });

  const onChangeContents = (value: any) =>{
      setValue("contents", value === "<p><br></p>" ? "" : value);
      trigger("contents");
  };


  // 주소 스테이트
    const [ address, setAddress] = useState("")
    const [ zipcode, setZipcode] = useState("")
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
      setZipcode(data.zonecode)
  }
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // 시작일 종료일
  const [fromValue, ] = useRecoilState<string>(fromValues);
  const [toValue, ] = useRecoilState<string>(toValues);

  // 등록하기
  const onClickSubmit = async(data) => {
    if(data){
      console.log(data,"ddddd")
      try{
        const result = await createProject({
          variables: {
            createProjectInput:{
              projectName: data.projectName,
              projectIntro: data.remarks,
              projectDetailIntro: data.contents,
              projectImageURL:"123.jpg",
              projectColor:"#279727",
              startDate: fromValue,
              endDate:toValue,
              projectAddress: {
                  address: address, 
                  detailAddress: addressDetail,
              },
            },
          }
        })           
        alert("성공")
        console.log(result)
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
      />
    )
}
