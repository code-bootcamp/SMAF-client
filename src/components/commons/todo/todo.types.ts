import { Schedule } from "../../../commons/types/generated/types";

export interface TodoProps {
  projectId: string;
  today: Date;
}

export interface TodoUIProps {
  data?: { fetchProjectSchedules: Array<Schedule> };
  today: string;
}
