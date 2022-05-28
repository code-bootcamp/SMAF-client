import { gql } from "@apollo/client";

export const FETCH_PROJECT_SCHEDULES = gql`
  query fetchProjectSchedules($projectId: String!) {
    fetchProjectSchedules(projectId: $projectId) {
      scheduleId
      scheduleName
      scheduleContents
      scheduleDate
      createAt
      project {
        projectId
        projectColor
      }
      status
    }
  }
`;
