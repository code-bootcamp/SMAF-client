import { useEffect, useState } from "react";
import ProjectListUI from "./projectList.presenter";

export default function ProjectList() {

  const [rate, setRate] = useState(0)

    useEffect(()=>{
        setRate(80)
    },[rate])

  return <ProjectListUI
    rate={rate}
  />;
}
