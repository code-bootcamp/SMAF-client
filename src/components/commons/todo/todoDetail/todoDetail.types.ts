import { Schedule } from "../../../../commons/types/generated/types";

export interface TodoDetailProps {
  el: Schedule;
  today: string;
}

export interface TodoDetailHTMLProps {
  el: Schedule;
  today: string;
  dateArray: string[];
  onClickProject: () => void;
}
