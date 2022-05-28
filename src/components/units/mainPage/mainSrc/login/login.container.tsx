import LoginUI from "./login.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/store";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";
import { useState } from "react";
// import { getAccessToken } from "../../../../../commons/libraries/getAccessToken.ts/getAccessToken";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import Cookies from "js-cookie";

const schema = yup
  .object({
    email: yup
      .string()
      .email("이메일 아이디를 @까지 정확하게 입력해주세요 .")
      .required("이메일은 필수 입력 !!"),
    password: yup
      .string()
      .max(16, "영문+숫자조합 8~16자리의 비밀번호 입력해주세요.")
      .required("비밀번호는 필수입력 사항입니다."),
  })
  .required();

interface IFormValues {
  email?: string;
  password?: string;
}

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { MoveToPage } = useMoveToPage();

  // 얼럿모달
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const onClickExitAlertModal = () => {
    setAlertModal(false);
    // router.push("/");
  };

  // 에러 모달
  const onClickExitErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickLogin = async (data: IFormValues) => {
    console.log("login", data);
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result, "result");
      const accessToken = result.data.login;
      console.log("accessToken", "로그인엑세스토큰");
      setAccessToken(accessToken);
      Cookies.set("accessToken", accessToken);

      setModalContents("로그인이 완료되었습니다.");
      setAlertModal(true);
    alert("로그인이 완료되었습니다.")
      
    } catch (error: any) {
      console.log(error.message)
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const clickMeGoogle = () => {
    document.location.href = "https://backend.smaf.shop/google";
  };

  const clickMeNaver = () => {
    document.location.href = "https://backend.smaf.shop/naver";
  };

  const clickMeKakao = () => {
    document.location.href = "https://backend.smaf.shop/kakao";
  };

  // useEffect(() => {
  //     const accessToken = Cookies.get("accessToken");
  //     if (accessToken) {
  //         setAccessToken(accessToken);
  //     } else {
  //         getAccessToken().then((newAccessToken) => {
  //             if (!newAccessToken) return;
  //             setAccessToken(newAccessToken);
  //         });
  //     }
  // }, []);

  // useEffect(() => {
  //     getAccessToken().then((newAccessToken) => {
  //         setAccessToken(newAccessToken);
  //     });
  // }, []);

  return (
    <LoginUI
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      clickMeGoogle={clickMeGoogle}
      clickMeNaver={clickMeNaver}
      clickMeKakao={clickMeKakao}
      MoveToPage={MoveToPage}

      onClickExitAlertModal={onClickExitAlertModal}
      alertModal={alertModal}
      modalContents={modalContents}
      onClickExitErrorModal={onClickExitErrorModal}
      errorAlertModal={errorAlertModal}
    />
  );
}
