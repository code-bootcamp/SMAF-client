import HeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_LOGIN_USER = gql`
    query fetchLoginUser {
        fetchLoginUser {
            userId
            userName
            email
            phone
            admin
            userImageURL
            projectTicket
        }
    }
`;

export default function HeaderContainer(_props: any) {
    const { data } = useQuery(FETCH_LOGIN_USER);
    const router = useRouter();

    const onClickMain = () => {
        router.push(`/`);
    };

    const onClickQna = () => {
        router.push(`/QuestionAnswer`);
    };

    const onClickSignUp = () => {
        router.push(`/signup`);
    };

    return (
        <HeaderUI
            onClickMain={onClickMain}
            onClickQna={onClickQna}
            onClickSignUp={onClickSignUp}
            data={data}
        />
    );
}
