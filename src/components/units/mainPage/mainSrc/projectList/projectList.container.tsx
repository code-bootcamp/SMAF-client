import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProjectListUI from "./projectList.presenter";
import { FETCH_PARTICIPATING_PROJECTS } from "./projectList.queries";

export default function ProjectList() {
  const router = useRouter()

  const { data } = useQuery(FETCH_PARTICIPATING_PROJECTS);

  const onclickToProjectNew = () =>{
    router.push('/project/new')
  }

  return (
  <ProjectListUI 
  onclickToProjectNew={onclickToProjectNew}
  data={data} />
  )
}
