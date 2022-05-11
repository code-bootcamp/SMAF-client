import { ChangeEvent, MouseEvent } from "react";

export interface ImageSignProps {
  fileRef: any;
  imageUrl?: String;
  isActive: boolean;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImage: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IImageBoard {
  isActive: boolean;
}
