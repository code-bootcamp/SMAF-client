import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($createUserInput: createUserInput!) {
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
    mutation checkedToekn($phone: String!, $inputToken: String!) {
        checkedToekn(phone: $phone, inputToken: $inputToken)
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export const UPLOAD_FILE = gql`
    mutation userImageUpload($file: [Upload!]!) {
        userImageUpload(file: $file)
    }
`;
