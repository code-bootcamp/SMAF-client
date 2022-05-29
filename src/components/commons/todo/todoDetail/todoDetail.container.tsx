import TodoDetailHTML from "./todoDetail.presenter";
import { useState, useEffect } from "react";
import moment from "antd/node_modules/moment";

export default function TodoDetail(props: any) {
  //   console.log(props.el.createAt.slice(0, 10), "생성일");
  //   console.log(props.el.scheduleDate.slice(0, 10), "마감일");
  //   console.log(props.today, "props.today");


  const [dateArray, setDateArray] = useState<string[]>([]);

  function getDates() {
    const startDay = props.el.createAt.slice(0, 10);
    const endDay = props.el.scheduleDate.slice(0, 10);
    const dateArray = [];
    let currentDate = moment(startDay);
    // eslint-disable-next-line no-var
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

  
  return (
    <TodoDetailHTML el={props.el} today={props.today} dateArray={dateArray} />
  );
}
