import { gql } from "@apollo/client";

export const FETCH_SCHEDULES = gql`
  query fetchSchedules {
    fetchSchedules {
      scheduleId
      createAt
      scheduleDate
    }
  }
`;
