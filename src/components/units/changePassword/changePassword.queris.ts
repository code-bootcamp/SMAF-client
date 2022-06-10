import { gql } from "@apollo/client";

export const FETCH_USER = gql`
    query fetchUser($userId: String!) {
        fetchUser(userId: $userId) {
            userId
            email
            phone
        }
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation updatePassword($email: String!, $password: String!) {
        updatePassword(email: $email, password: $password)
    }
`;
export const CHANGE_SENDTOKEN = gql`
    mutation sendTokenPhone($phone: String!) {
        sendTokenPhone(phone: $phone)
    }
`;

export const CHANGE_CHECKEDTOKEN = gql`
    mutation checkedToekn($phone: String!, $inputToken: String!) {
        checkedToekn(phone: $phone, inputToken: $inputToken)
    }
`;

export const FETCH_LOGIN_USER = gql`
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