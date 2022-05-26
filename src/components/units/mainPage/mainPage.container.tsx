import MainUI from "./mainPage.presenter";

import { gql, useQuery } from "@apollo/client";

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

export default function Main() {
    const { data: myData } = useQuery(FETCH_LOGIN_USER);

    console.log(myData);

    return <MainUI myData={myData} />;
}
