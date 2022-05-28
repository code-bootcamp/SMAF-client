import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

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
