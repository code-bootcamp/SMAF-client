import { gql } from "@apollo/client";
export const FETCH_PARTCIPATING_USER = gql`
  query fetchParticipatingUser($projectId: String!) {
    fetchParticipatingUser(projectId: $projectId) {
      projectParticipantId
      position
      isActivated
      project {
        projectId
      }
    }
  }
`;
