import { gql } from "@apollo/client";
export const FETCH_USER = gql`
  query fetchUser($userId: String!) {
    fetchUser(userId: $userId) {
      userId
      userName
      userImageURL
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      userId
      userName
      email
      phone
      projectTicket
      admin
    }
  }
`;
