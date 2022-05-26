import HeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, InMemoryCache, useQuery } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
    query fetchLoginUser {
        fetchLoginUser {
            userId
            userName
            email
            phone
            userImageURL
            projectTicket
            admin
        }
    }
`;

export default function HeaderContainer(props: any) {
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

    const cache = new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    getAllPosts: {
                        merge: true,
                    },
                },
            },
        },
    });
    console.log(cache, "캐쉬머지");
    return (
        <HeaderUI
            onClickMain={onClickMain}
            onClickQna={onClickQna}
            onClickSignUp={onClickSignUp}
            data={data}
        />
    );
}
