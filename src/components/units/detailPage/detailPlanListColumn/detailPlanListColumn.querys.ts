import { gql } from "@apollo/client";

export const FETCH_PROCESS_CATEGORIES = gql`
  query fetchProcessCategories($projectId: String!) {
    fetchProcessCategories(projectId: $projectId) {
      processCategoryId
      processName
      createAt
    }
  }
`;

export const FETCH_PARTICIPATING_USER = gql`
  query fetchParticipatingUser($projectId: String!) {
    fetchParticipatingUser(projectId: $projectId) {
      projectParticipantId
      position
      isActivated
      user {
        userId
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
      }
      project {
        projectId
      }
      createAt
    }
  }
`;

export const FETCH_PROJECT_SCHEDULES_CATEGORY = gql`
  query fetchCategorySchedules($processCategoryId: String!) {
    fetchCategorySchedules(processCategoryId: $processCategoryId) {
      scheduleId
      scheduleName
      scheduleDate
      scheduleContents
      status
      user {
        userId
      }
      processCategory {
        processCategoryId
      }
      project {
        projectId
      }
      createAt
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteProcessCategory($processCategoryId: String!) {
    deleteProcessCategory(processCategoryId: $processCategoryId)
  }
`;

export const FETCH_CATEGORY = gql`
  query fetchprocessCategory($processCategoryId: String!) {
    fetchprocessCategory(processCategoryId: $processCategoryId) {
      processCategoryId
      processName
    }
  }
`;
