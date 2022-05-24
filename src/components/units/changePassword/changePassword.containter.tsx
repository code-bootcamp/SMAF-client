import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ChangePasswordUI from "./changePassword.presenter";
import { CHANGE_CHECKEDTOKEN, CHANGE_SENDTOKEN, UPDATE_PASSWORD } from "./changePassword.queris";
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
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
    phone: yup
        .string()
        .matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, "핸드폰 형식에 올바르지 않습니다")
        .required("필수입력입니다."),
});

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    inputToken: string;
}

export default function ChangePassword(props: any) {
    // const [fetchUser] = useMutation(FETCH_USER);
    const [updatePassword] = useMutation(UPDATE_PASSWORD);
    const [sendTokenPhone] = useMutation(CHANGE_SENDTOKEN);
    const [checkedTokenPhone] = useMutation(CHANGE_CHECKEDTOKEN);
    const [phone, setPhone] = useState("");
    const [inputToken, setInputToken] = useState("");
    const [, setTrueToken] = useState(false);
    const [isActive] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

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

                Modal.success({
                    content: "인증번호가 발송되었습니다.",
                });
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    const onClickTokenCheck = async () => {
        console.log("1,2,3,Chceck");

        const data = await checkedTokenPhone({
            variables: {
                phone,
                inputToken,
            },
        });
        console.log(data);

        if (!data.data.checkedTokenPhone) {
            Modal.success({
                content: "인증이 완료되었습니다.",
            });
            setTrueToken(true);
        } else {
            Modal.error({
                content: "인증번호가 일치하지 않습니다.",
            });
            // alert("실패");
        }
    };

    const onClickUpdatePassword = async (data: FormValues) => {
        // const { email, password, phone } = data;

        // if (email && password && phone && inputToken && trueToken) {
        //     setIsActive(true);
        // }
        try {
            await updatePassword({
                variables: {
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                },
            });
            Modal.success({
                content: "비밀번호 변경완료했습니다.",
            });
            console.log("완료");

            router.push("/main");
        } catch (error) {
            message.error(error.message);
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
        />
    );
}
