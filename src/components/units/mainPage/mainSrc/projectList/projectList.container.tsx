import { useQuery } from "@apollo/client";
import ProjectListUI from "./projectList.presenter";
import { FETCH_PARTICIPATING_PROJECTS } from "./projectList.queries";

export default function ProjectList() {
  const { data } = useQuery(FETCH_PARTICIPATING_PROJECTS);

  return <ProjectListUI data={data} />;
}
