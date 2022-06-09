import { useState, ChangeEvent } from "react";
import * as S from "./colorPick.styles";
import { IColorPickProps } from "./colorPick.types";

export default function ColorPick(props: IColorPickProps) {
  const [isSelect, setIsSelect] = useState([
    { key: "0", value: "#FF8B8B", checked: false, index: 0 },
    { key: "1", value: "#FFCA8B", checked: false, index: 1 },
    { key: "2", value: "#FFEC8B", checked: false, index: 2 },
    { key: "3", value: "#D3FF8B", checked: false, index: 3 },
    { key: "4", value: "#9BFF8B", checked: false, index: 4 },
    { key: "5", value: "#8BFFCE", checked: false, index: 5 },
    { key: "6", value: "#8BFFFF", checked: false, index: 6 },
    { key: "7", value: "#8BB2FF", checked: false, index: 7 },
    { key: "8", value: "#8B90FF", checked: false, index: 8 },
    { key: "9", value: "#D38BFF", checked: false, index: 9 },
    { key: "10", value: "#FD8BFF", checked: false, index: 10 },
    { key: "11", value: "#FF8BB5", checked: false, index: 11 },
  ]);

  const onChangeCheck = (el: any) => (event: ChangeEvent<HTMLInputElement>) => {
    const temp = isSelect.map((el, idx) => {
      return { ...el, checked: idx === Number(event?.target.id) };
    });
    setIsSelect(temp);
    props.setColor(el.value);
  };

  return (
    <S.Wrapper>
      {isSelect.map((el, idx: any) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            key={el.key}
            id={idx}
            onChange={onChangeCheck(el)}
            checked={Boolean(el.checked)}
            defaultValue={props.data?.fetchProject.projectColor}
          />
          <S.Circle
            className="checkbox_color"
            style={{ backgroundColor: el.value }}
          ></S.Circle>
        </label>
      ))}
    </S.Wrapper>
  );
}
