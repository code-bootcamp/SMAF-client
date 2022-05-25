import { gql } from "@apollo/client";

export const FETCH_PARTCIPATING_USER_EMAIL = gql`
  query fetchUserEmail($userOremail: String!) {
    fetchUserEmail(userOremail: $userOremail) {
      userId
      userName
      email
      phone
      userImageURL
      admin
    }
  }
`;

export const CREATE_PARTICIPANT = gql`
  mutation createParticipant($email: String!, $projectId: String!) {
    createParticipant(email: $email, projectId: $projectId) {
      projectParticipantId
    }
  }
`;

export const SEND_EMAIL = gql`
  mutation sendInvitaionEmail($email: [String!]!) {
    sendInvitaionEmail(email: $email)
  }
`;

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
