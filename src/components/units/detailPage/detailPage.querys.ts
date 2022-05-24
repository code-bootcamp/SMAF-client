import { gql } from "@apollo/client";
// 카테고리 생성
export const CREATE_PROCESS_CATEGORY = gql`
  mutation createProcessCategory($processName: String!, $projectId: String!) {
    createProcessCategory(processName: $processName, projectId: $projectId) {
      processCategoryId
    }
  }
`;
// 프로젝트 조회
export const FETCH_PROJECT = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      projectId
      projectName
      projectIntro
      projectDetailIntro
      projectImageURL
      startDate
      endDate
      status
      projectColor
      createAt
      address {
        projectAddressId
        address
        detailAddress
      }
    }
  }
`;
// 카테고리 조회
export const FETCH_PROCESS_CATEGORIES = gql`
  query fetchProcessCategories($projectId: String!) {
    fetchProcessCategories(projectId: $projectId) {
      processCategoryId
      processName
      createAt
    }
  }
`;

// 프로젝트 ID로 전체 스케줄 조회
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

// 카테고리 ID로 전체 스케줄 조회
export const FETCH_PROJECT_SCHEDULES_CATEGORY = gql`
  query fetchCategorySchedules($processCategoryId: String!) {
    fetchCategorySchedules(processCategoryId: $processCategoryId) {
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

// 스케쥴 업데이트
export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule(
    $scheduleId: String!
    $updateScheduleInput: UpdateScheduleInput!
  ) {
    updateSchedule(
      scheduleId: $scheduleId
      updateScheduleInput: $updateScheduleInput
    ) {
      scheduleId
    }
  }
`;
