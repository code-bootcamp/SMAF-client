import TodoDetailHTML from "./todoDetail.presenter";
import { useState, useEffect } from "react";
import moment from "antd/node_modules/moment";
import { useRouter } from "next/router";
import { TodoDetailProps } from "./todoDetail.types";

export default function TodoDetail(props: TodoDetailProps) {
  const router = useRouter();
  const [dateArray, setDateArray] = useState<string[]>([]);

  function getDates() {
    const startDay = props.el.createAt.slice(0, 10);
    const endDay = props.el.scheduleDate.slice(0, 10);
    const dateArray = [];
    let currentDate = moment(startDay);
    const endDays = moment(endDay);
    while (currentDate <= endDays) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    setDateArray(dateArray);
  }

  useEffect(() => {
    getDates();
  }, []);

  const onClickProject = () => {
    router.push("/project");
  };

  return (
    <TodoDetailHTML
      el={props.el}
      today={props.today}
      dateArray={dateArray}
      onClickProject={onClickProject}
    />
  );
}
