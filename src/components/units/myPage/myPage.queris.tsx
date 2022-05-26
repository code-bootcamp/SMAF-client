import { gql } from "@apollo/client";

// 모든 프로젝트 불러오기
export const FETCH_PROJECTS_ALL = gql`
  query fetchProjectsAll {
    fetchProjectsAll {
      projectName
      projectIntro
      projectDetailIntro
      projectImageURL
      startDate
      endDate
    }
  }
`;

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
