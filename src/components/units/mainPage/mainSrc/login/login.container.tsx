import LoginUI from "./login.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApolloClient, useMutation } from "@apollo/client";
import { FETCH_LOGIN_USER, LOGIN_USER } from "./login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../../commons/store";
import { useRouter } from "next/router";

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
    // const [, setUserInfo] = useRecoilState(userInfoState);
    const [login] = useMutation(LOGIN_USER);
    // const client = useApolloClient();
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onClickLogin = async (data: IFormValues) => {
        console.log("login", data);
        const result = await login({
            variables: {
                email: data.email,
                password: data.password,
            },
        });
        console.log(result, "result");
        const accessToken = result.data.login;
        console.log("accessToken");
        setAccessToken(accessToken);

        // const resultUserInfo = await client.query({
        //     query: FETCH_LOGIN_USER,
        //     context: {
        //         headers: {
        //             Authorization: `Bearer ${accessToken}`,
        //         },
        //     },
        // });

        // const userInfo = resultUserInfo.data.fetchLoginUser;
        // setUserInfo(userInfo);
        console.log("완료");
        // localStorage.setItem("accessToken", accessToken);
        // console.log(accessToken);
        // console.log(userInfo);
        router.push("/main");
    };

    return (
        <LoginUI
            formState={formState}
            register={register}
            handleSubmit={handleSubmit}
            onClickLogin={onClickLogin}
        />
    );
}
