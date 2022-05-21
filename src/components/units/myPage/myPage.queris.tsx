import { gql } from "@apollo/client";

// 유저 정보 불러오기
export const FETCH_USER = gql`
  query fetchUser($userId: String!) {
    fetchUser(userId: $userId) {
      userId
      userName
      email
      userImageURL
    }
  }
`;

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
