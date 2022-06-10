import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ChangePasswordUI from "./changePassword.presenter";
import {
    CHANGE_CHECKEDTOKEN,
    CHANGE_SENDTOKEN,
    FETCH_LOGIN_USER,
    UPDATE_PASSWORD,
} from "./changePassword.queris";
import { useRouter } from "next/router";
import { MutationUpdatePasswordArgs } from "../../../commons/types/generated/types";
import { FormValues } from "./changePassword.types";

const schema = yup.object({
    email: yup
        .string()
        .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
        .required("이메일은 필수 입력 사항입니다."),
    password: yup
        .string()
        .matches(/^[A-Za-z0-9+]{8,16}$/, "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
        .required("비밀번호는 필수 입력 사항입니다."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
    phone: yup
        .string()
        .matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, "핸드폰 형식에 올바르지 않습니다")
        .required("필수입력입니다."),
});

export default function ChangePassword(_props: any) {
    const { data } = useQuery(FETCH_LOGIN_USER);
    const [updatePassword] = useMutation(UPDATE_PASSWORD);
    const [sendTokenPhone] = useMutation(CHANGE_SENDTOKEN);
    const [checkedTokenPhone] = useMutation(CHANGE_CHECKEDTOKEN);
    const [phone, setPhone] = useState("");
    const [inputToken, setInputToken] = useState("");
    const [, setTrueToken] = useState(false);
    const [isActive] = useState(false);
    const router = useRouter();

    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState<string>();
    const [go, setGo] = useState(false);
    const [errorAlertModal, setErrorAlertModal] = useState(false);

    const { register, handleSubmit, formState } = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // 이동 모달
    const onClickRoutingModal = () => {
        setAlertModal(false);
        router.push("/");
    };

    // 확인 모달
    const onClickConfirmModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onClickRouterAlertModal = () => {
        setAlertModal(false);
    };

    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
        setInputToken(e.target.value);
    };

    const onClickSendTokenPhone = async () => {
        const checkNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (checkNumber.test(phone)) {
            try {
                await sendTokenPhone({
                    variables: {
                        phone,
                    },
                });
                setModalContents("인증번호가 발송되었습니다.");
                setAlertModal(true);
                setGo(false);
            } catch (error: any) {
                setModalContents(error.message);
                setErrorAlertModal(true);
            }
        } else {
            setModalContents("번호를 입력해주세요.");
            setErrorAlertModal(true);
        }
    };

    const onClickTokenCheck = async () => {
        if (inputToken) {
            try {
                const data = await checkedTokenPhone({
                    variables: {
                        phone,
                        inputToken,
                    },
                });
                const aaa = data.data.checkedToekn;
                if (aaa.includes("완료")) {
                    setModalContents("인증이 완료되었습니다.");
                    setAlertModal(true);
                    setTrueToken(true);
                } else {
                    setModalContents("인증번호가 일치하지 않습니다.");
                    setErrorAlertModal(true);
                }
            } catch (error: any) {
                setModalContents(error.message);
                setErrorAlertModal(true);
            }
        } else {
            setModalContents("인증번호를 입력해주세요.");
            setErrorAlertModal(true);
        }
    };

    const onClickUpdatePassword = async (data: MutationUpdatePasswordArgs) => {
        try {
            await updatePassword({
                variables: {
                    ...data,
                },
            });
            setModalContents("비밀번호 변경이 완료되었습니다! 다시 로그인해주세요.");
            setAlertModal(true);

            setGo(true);
        } catch (error: any) {
            setModalContents(error.message);
            setAlertModal(true);
        }
    };

    return (
        <ChangePasswordUI
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onChangePhone={onChangePhone}
            onChangeToken={onChangeToken}
            onClickSendTokenPhone={onClickSendTokenPhone}
            isActive={isActive}
            onClickTokenCheck={onClickTokenCheck}
            onClickUpdatePassword={onClickUpdatePassword}
            alertModal={alertModal}
            modalContents={modalContents}
            go={go}
            onClickRouterAlertModal={onClickRouterAlertModal}
            onClickRoutingModal={onClickRoutingModal}
            onClickConfirmModal={onClickConfirmModal}
            onClickErrorModal={onClickErrorModal}
            errorAlertModal={errorAlertModal}
            data={data}
        />
    );
}
