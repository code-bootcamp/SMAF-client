import ExperienceSMAFDetailHTML from "./experienceSMAFDetail.presenter";
import { useEffect, useState } from "react";
import { sessionTriger } from '../../../../../../commons/store/index';
import { useRecoilState } from 'recoil';

export default function ExperienceSMAFDetail(props: any) {
  const [planCardName, setPlanCardName] = useState<string[] | any[]>([]);
  const [,setSession] = useRecoilState(sessionTriger)
  useEffect(() => {
    setPlanCardName([]);
  }, []);

  useEffect(()=>{
    sessionStorage.setItem(`Plan${props.number+1}`,[...planCardName])
    setSession((prev)=>!prev)
  },[planCardName])

  const AddPalnCard = () => {
    // eslint-disable-next-line no-array-constructor
    setPlanCardName([
      ...planCardName,
      new Array(1).fill(`${props.el[0]}-${planCardName.length + 1}`),
    ]);
  };
  //   console.log(planCardName, `${props.index} 카테고리 카드`);
  //   console.log(props.categoryId, "카테고리id");
  return (
    <ExperienceSMAFDetailHTML
      categoryName={props.el[0]}
      categoryIndex={props.number}
      AddPalnCard={AddPalnCard}
      planCardName={planCardName}
    />
  );
}