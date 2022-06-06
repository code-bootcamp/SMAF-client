import ExperienceSMAFDetailHTML from "./experienceSMAFDetail.presenter";
import { useEffect, useState } from "react";
import { sessionTriger } from "../../../../../../commons/store/index";
import { useRecoilState } from "recoil";
import { ExperienceSMAFDetailProps } from "./experienceSMAFDetail.types";

export default function ExperienceSMAFDetail(props: ExperienceSMAFDetailProps) {
  const [planCardName, setPlanCardName] = useState<string[][]>([]);
  const [, setSession] = useRecoilState(sessionTriger);
  useEffect(() => {
    setPlanCardName([]);
  }, []);

  useEffect(() => {
    // @ts-ignore
    sessionStorage.setItem(`Plan${props.number + 1}`, [...planCardName]);
    setSession((prev) => !prev);
  }, [planCardName]);

  const AddPalnCard = () => {
    // eslint-disable-next-line no-array-constructor
    setPlanCardName([
      ...planCardName,
      new Array(1).fill(`${props.el[0]}-${planCardName.length + 1}`),
    ]);
  };
  return (
    <ExperienceSMAFDetailHTML
      categoryName={props.el[0]}
      categoryIndex={props.number}
      AddPalnCard={AddPalnCard}
      planCardName={planCardName}
      scheduleArray={props.scheduleArray}
    />
  );
}
