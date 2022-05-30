import { gql } from "@apollo/client";

export const FETCH_SCHEDULES = gql`
  query fetchSchedules {
    fetchSchedules {
      scheduleId
      createAt
      scheduleDate
      project {
        projectId
      }
    }
  }
`;

export const FETCH_PARTICIPATING_PROJECTS = gql`
  query fetchParticipatingProject {
    fetchParticipatingProject {
      project {
        projectId
      }
    }
  }
`;
