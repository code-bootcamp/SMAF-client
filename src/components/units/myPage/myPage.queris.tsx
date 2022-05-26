import { gql } from "@apollo/client";

// 참여중인 프로젝트 목록
export const FETCH_ACTIVE_PROJECT = gql`
  query fetchActivatedProject {
    fetchActivatedProject {
      projectParticipantId
      isActivated
      createdAt
      user {
        userName
      }
      project {
        projectId
        projectName
        projectIntro
        projectDetailIntro
        projectImageURL
        startDate
        endDate
      }
    }
  }
`;

// 참여했던 프로젝트 목록
export const FETCH_INACTIVE_PROJECT = gql`
  query fetchInactivatedProject($standard: String!) {
    fetchInactivatedProject(standard: $standard) {
      projectParticipantId
      isActivated
      createdAt
      user {
        userName
      }
      project {
        projectName
        projectIntro
        projectDetailIntro
        projectImageURL
        startDate
        endDate
      }
    }
  }
`;
