import { useQuery } from "@apollo/client";
import TodoUI from "./todo.presenter";
import { FETCH_PROJECT_SCHEDULES } from "./todo.queries";
import moment from "antd/node_modules/moment";


export default function Todo(props: any) {
  const { data: scheduleData } = useQuery(FETCH_PROJECT_SCHEDULES, {
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
