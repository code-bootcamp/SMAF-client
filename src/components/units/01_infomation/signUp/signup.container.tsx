import SignupUI from "./signup.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER, SIGNUP_CHECKEDTOKEN, SIGNUP_SENDTOKEN } from "./signup.queries";
// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { message } from "antd";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object({
    email: yup
        .string()
        .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
        .required("이메일은 필수 입력 사항입니다."),
    password: yup
        .string()
        .matches(/^[A-Za-z0-9+]{8,16}$/, "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
        .required("비밀번호는 필수 입력 사항입니다."),
    name: yup
        .string()
        .min(2, "이름은 2자리 이상 입력해 주세요.")
        .max(10, "이름이 너무 깁니다.")
        .required("이름은 필수 입력 사항입니다."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
    phone: yup
        .string()
        .matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, "핸드폰 형식에 올바르지 않습니다")
        .required("필수입력입니다."),
});

interface FormValues {
    userImageURL: string;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phone: string;
    inputToken: string;
}

export default function SignUpContainer(props: any) {
  const [createUser] = useMutation(CREATE_USER);
  const [sendTokenPhone] = useMutation(SIGNUP_SENDTOKEN);
  const [checkedTokenPhone] = useMutation(SIGNUP_CHECKEDTOKEN);
  const [phone, setPhone] = useState("");
  const [inputToken, setInputToken] = useState("");
  const [, setTrueToken] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  // const fileRef = useRef<HTMLInputElement>(null);
  const [urls, setUrls] = useState();
  // Alert
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState(false);
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [go, setGo] = useState(false)

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const onClickImage = () => {
  //     fileRef.current?.click();
  // };
  // 이동 모달
  const onClickRoutingModal = () => {
    setAlertModal(false);
    // router.push("/");
  };

  // 확인 모달
  const onClickconfirmModal = () => {
    setAlertModal(false);
  };

  // 에러 모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setInputToken(e.target.value);
  };

  const onClickSendTokenPhone = async () => {
    console.log(phone);

    const checkNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (checkNumber.test(phone)) {
      try {
        const result = await sendTokenPhone({
          variables: {
            phone,
          },
        });
        setModalContents("인증번호가 발송되었습니다.");
        setAlertModal(true);
        setGo(false)
        
      } catch (error:any) {
          setModalContents(error.message);
          setErrorAlertModal(true);
      }
    } else{
      setModalContents("번호를 입력해주세요.");
      setErrorAlertModal(true);
    }
  };

  const onClickTokenCheck = async () => {
    console.log("1,2,3,Chceck");
    if(inputToken){
        try{
        const data = await checkedTokenPhone({
          variables: {
            phone,
            inputToken,
          },
        });
        console.log(data.data.checkedToekn);
        const aaa= data.data.checkedToekn
        if(aaa.includes("완료")){
          setModalContents("인증이 완료되었습니다.");
          setAlertModal(true);
          setTrueToken(true);
        } else{
          setModalContents("인증번호가 일치하지 않습니다.");
          setErrorAlertModal(true);
        }

      } catch(error){
        setModalContents(error.message);
        setErrorAlertModal(true);
      }
      } else{
        setModalContents("인증번호를 입력해주세요.");
        setErrorAlertModal(true);
      }
  }

  const onClickcreateUser = async (data: FormValues) => {
    // const { email, name, password, phone } = data;
    // console.log(data, "데이터");
    // if (email && password && name && inputToken && trueToken && phone) {
    //     setIsActive(true);
    // }

    try {
      await createUser({
        variables: {
          createUserInput: {
            userName: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            userImageURL: urls,
          },
        },
      });
      setModalContents("회원가입이 완료되었습니다.");
      setAlertModal(true);
      setGo(true)

      console.log("완료");

      // router.push("/");
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }

  };
 

  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickcreateUser={onClickcreateUser}
      onClickSendTokenPhone={onClickSendTokenPhone}
      onClickTokenCheck={onClickTokenCheck}
      onChangePhone={onChangePhone}
      onChangeToken={onChangeToken}
      // isActive={isActive}
      // fileRef={fileRef}
      // onClickImage={onClickImage}
      setUrls={setUrls}
      urls={urls}
      // 모달
      alertModal={alertModal}
      errorAlertModal={errorAlertModal}
      modalContents={modalContents}
      onClickRoutingModal={onClickRoutingModal}
      onClickconfirmModal={onClickconfirmModal}
      onClickErrorModal={onClickErrorModal}
      go={go}
    />
  );
}