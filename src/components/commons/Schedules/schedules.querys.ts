import { gql } from "@apollo/client";
export const FETCH_PARTICIPATING_PROJECTS = gql`
  query fetchParticipatingProject {
    fetchParticipatingProject {
      projectParticipantId
      position
      project {
        projectId
      }
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
      admin
      userImageURL
      projectTicket
    }
  }
`;
