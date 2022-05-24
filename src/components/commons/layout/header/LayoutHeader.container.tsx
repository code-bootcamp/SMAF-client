import HeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";

const LOGOUT = gql`
    mutation logout {
        logout
    }
`;

const FETCH_LOGIN_USER = gql`
    query fetchLoginUser {
        fetchLoginUser {
            userName
            userImageURL
        }
    }
`;

export default function HeaderContainer(props) {
    const { data } = useQuery(FETCH_LOGIN_USER);
    const router = useRouter();

    const onClickMain = () => {
        router.push(`/main`);
    };

    return <HeaderUI onClickMain={onClickMain} data={data} />;
}
