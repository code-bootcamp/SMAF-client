import { useQuery } from "@apollo/client";
import TodoUI from "./todo.presenter";
import { FETCH_PROJECT_SCHEDULES } from "./todo.queries";
import moment from "antd/node_modules/moment";
import { TodoProps } from "./todo.types";
import {
  Query,
  QueryFetchProjectSchedulesArgs,
} from "../../../commons/types/generated/types";

export default function Todo(props: TodoProps) {
  const { data: scheduleData } = useQuery<
    Pick<Query, "fetchProjectSchedules">,
    QueryFetchProjectSchedulesArgs
  >(FETCH_PROJECT_SCHEDULES, {
    variables: {
      projectId: props.projectId,
    },
  });

  return (
    <TodoUI
      data={scheduleData}
      today={moment(props.today).format("YYYY-MM-DD")}
    />
  );
}
