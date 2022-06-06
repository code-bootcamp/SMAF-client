export interface ExperienceSMAFDetailProps {
  el: string[];
  number: number;
  scheduleArray: Array<string[]>;
  index: number;
}

export interface ExperienceSMAFDetailHTMLProps {
  categoryName: string;
  categoryIndex: number;
  planCardName: string[][];
  scheduleArray: Array<string[]>;
  AddPalnCard: () => void;
}
