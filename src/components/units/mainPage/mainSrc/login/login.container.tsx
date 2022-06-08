import LoginUI from "./login.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/store";
import { useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FormValues } from "./login.types";
import { MutationLoginArgs } from "../../../../../commons/types/generated/types";

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

export default function Login(_props: any) {
    const [, setAccessToken] = useRecoilState(accessTokenState);
    const [login] = useMutation(LOGIN_USER);
    const { register, handleSubmit, formState } = useForm<FormValues>({
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
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onClickLogin = async (data: MutationLoginArgs) => {
        try {
            const result = await login({
                variables: {
                    ...data,
                },
            });
            const accessToken = result.data.login;
            setAccessToken(accessToken);
        } catch (error: any) {
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
