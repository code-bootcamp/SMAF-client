import styled from "@emotion/styled";
import { IImageBoard } from "./imageSign.types";

export const Btn = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 10px 125px 10px 0px;
  cursor: pointer;
`;

export const AreaColum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  /* box-shadow: 0px 4px 20px skyblue; */
  margin: 10px 0px;
`;

export const AreaRow = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 10px 0px;
`;

export const ImageBoard = styled.div`
  width: 200px;
  height: 200px;
  display: ${(props: IImageBoard) => (props.isActive ? "flex" : "none")};
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 10px 50px 10px 0px;
`;

export const Img = styled.img`
  height: 180px;
  width: 180px;
  object-Fit: "cover";
`;
