import { gql } from "@apollo/client";

// 유저 정보
// export const FETCH_LOGIN_USER = gql`
//   query fetchLoginUser {
//     fetchLoginUser {
//       userName
//       email
//     }
//   }
// `;

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

// fetchActivatedProject 참여중인 프로젝트 목록
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

// fetchInactivatedProject 참여했던 프로젝트 목록
export const FETCH_INACTIVE_PROJECT = gql`
  query fetchInactivatedProject {
    fetchInactivatedProject {
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
