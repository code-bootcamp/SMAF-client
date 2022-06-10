import { gql } from "@apollo/client";
export const CREATE_SCHEDULE = gql`
  mutation createSchedule($createScheduleInput: CreateScheduleInput!) {
    createSchedule(createScheduleInput: $createScheduleInput) {
      scheduleId
    }
  }
`;

export const FETCH_PROJECT_SCHEDULES_CATEGORY = gql`
  query fetchCategorySchedules($processCategoryId: String!) {
    fetchCategorySchedules(processCategoryId: $processCategoryId) {
      scheduleId
      scheduleName
      scheduleDate
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
