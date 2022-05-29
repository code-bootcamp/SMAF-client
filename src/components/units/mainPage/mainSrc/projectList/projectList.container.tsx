import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProjectListUI from "./projectList.presenter";
import {
  FETCH_PARTICIPATING_PROJECTS,
  FETCH_LOGIN_USER,
} from "./projectList.queries";

export default function ProjectList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PARTICIPATING_PROJECTS);
  const { data: mtData } = useQuery(FETCH_LOGIN_USER);
  const onclickToProjectNew = () => {
    router.push("/project/new");
  };

  return (
    <ProjectListUI
      onclickToProjectNew={onclickToProjectNew}
      data={data}
      mtData={mtData}
    />
  );
}
