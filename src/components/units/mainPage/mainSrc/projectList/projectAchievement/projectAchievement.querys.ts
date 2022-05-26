import { gql } from "@apollo/client";

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

export const FETCH_PROJECT_SCHEDULES_PROJECTID = gql`
  query fetchProjectSchedules($projectId: String!) {
    fetchProjectSchedules(projectId: $projectId) {
      scheduleId
      scheduleName
      scheduleDate
      scheduleContents
      status
      processCategory {
        processCategoryId
        processName
      }
      project {
        projectId
      }
      createAt
    }
  }
`;
