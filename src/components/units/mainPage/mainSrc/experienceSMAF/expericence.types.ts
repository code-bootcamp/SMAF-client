import { DropResult } from "react-beautiful-dnd";

export interface ExperienceSMAFHTMLProps {
  AddColumn: () => void;
  categoryName: string[][];
  handleDragStart: (initial: { draggableId: any }) => Promise<void>;
  handleDragEnd: (result: DropResult) => Promise<void>;
  scheduleArray: Array<string[]>;
}
