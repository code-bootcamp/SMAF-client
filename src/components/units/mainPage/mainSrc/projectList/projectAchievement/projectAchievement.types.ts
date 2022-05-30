import { MouseEvent } from "react";

export interface IProjectAchievementHTMLProps {
    result: number;
    el: any;
    schedulesData: any;
    dday: any;
    onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
