import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
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

export const SIGNUP_SENDTOKEN = gql`
    mutation sendTokenPhone($phone: String!) {
        sendTokenPhone(phone: $phone)
    }
`;

export const SIGNUP_CHECKEDTOKEN = gql`
    mutation checkedTokenPhone($phone: String!, $inputToken: String!) {
        checkedToken(phone: $Phone, inputToken: $InputToken)
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;
