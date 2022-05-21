import { useEffect, useState } from "react";
import ProjectListUI from "./projectList.presenter";

export default function ProjectList() {

  const [rate, setRate] = useState(0)

    useEffect(()=>{
        setRate(70)
    },[])

  return <ProjectListUI
    rate={rate}
  />;
}
