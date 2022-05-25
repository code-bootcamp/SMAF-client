import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ProjectListUI from "./projectList.presenter";
import { FETCH_PARTICIPATING_PROJECTS } from "./projectList.queries";

export default function ProjectList() {

  const { data } = useQuery(FETCH_PARTICIPATING_PROJECTS)

  const [rate, setRate] = useState(0)

    useEffect(()=>{
        setRate(70)
    },[])

  return <ProjectListUI
    rate={rate}
  />;
}
