import { gql } from "@apollo/client";

// 프로젝트 조회
export const FETCH_PARTICIPATING_PROJECTS = gql`
  query fetchParticipatingProject {
    fetchParticipatingProject {
      projectParticipantId
      position
      project {
        projectId
        projectName
        projectIntro
        projectDetailIntro
        projectImageURL
        startDate
        endDate
        projectColor
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
