import { Project, Schedule } from "../../../commons/types/generated/types";
// 03
export interface DropdownDetailProps {
  DeleteCategory: () => void;
  id: string;
}
// 04
export interface DropdownSchduelsProps {
  id: string;
  categoryId: string;
  el: Schedule;
}
// 05
export interface ProjectEditDropdownProps {
  projectData?: { fetchProject: Project };
}
