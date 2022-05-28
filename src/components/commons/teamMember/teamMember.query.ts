import { gql } from "@apollo/client";
export const FETCH_PARTCIPATING_USER = gql`
  query fetchParticipatingUser($projectId: String!) {
    fetchParticipatingUser(projectId: $projectId) {
      projectParticipantId
      position
      isActivated
      user {
        userId
        userName
        userImageURL
      }
      project {
        projectId
      }
    }
  }
`;

export const DELETE_PARTICIPANT = gql`
  mutation deleteParticipant($projectParticipantId: String!) {
    deleteParticipant(projectParticipantId: $projectParticipantId)
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
