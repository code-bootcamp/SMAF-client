import { DropResult } from "react-beautiful-dnd";
import {
  ProcessCategory,
  Project,
  Schedule,
  User,
} from "../../../commons/types/generated/types";

export interface IProjectDetailPageHTMLProps {
  OpenFileList: () => void;
  handleDragEnd: (result: DropResult) => void;
  handleDragStart: (initial: { draggableId: string }) => Promise<void>;
  onClickExitErrorModal: () => void;
  scheduleArray: Array<Schedule[]>;
  errorAlertModal: boolean;
  modalContents: string | undefined;
  projectData?: { fetchProject: Project };
  categoriesData?: { fetchProcessCategories: Array<ProcessCategory> };
  myData?: { fetchLoginUser: User };
  myDataInProject: any;
  isOpen: boolean;
  isLoading: boolean;
  dragItemId: string;
}
