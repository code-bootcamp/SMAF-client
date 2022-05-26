import { gql } from "@apollo/client";

// 유저 정보
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
