import ExperienceSMAFHTML from "./expericence.presenter";
import { useState, useEffect } from "react";
import { useRecoilState } from 'recoil';
import { sessionTriger } from '../../../../../commons/store/index';
export default function ExperienceSMAF() {
  const [categoryName, setCategoryName] = useState<string[] | any[]>([]);
  const [session] = useRecoilState(sessionTriger)
  const [scheduleArray, setScheduleArray] = useState([[]]);
  const [categorys, setCategorys] = useState([]);
  const [schedules, setSchedules] = useState<any[]>([])
  useEffect(() => {
    setCategoryName([]);
  }, []);

  useEffect(()=>{
    sessionStorage.setItem("Column",[...categoryName])
    DragAndDropData()
  },[categoryName, session])
  
  const AddColumn = () => {
    // eslint-disable-next-line no-array-constructor
    setCategoryName([
      ...categoryName,
      new Array(1).fill(`${Number(1 + categoryName.length)}번 항목`),
    ]);
    
  };

  const DragAndDropData = () => {
    const planNum = Number(categoryName.length)
    const dataArray: any[] = [];
    const sesstionList = []
    // const schedulesList = [sessionStorage.getItem(`Plan${planNum}`)].join("").split(",")
    for(let i = 1; i<=planNum; i++ ){
      if( sessionStorage.getItem(`Plan${i}`) !== "" ){
        sesstionList.push([sessionStorage.getItem(`Plan${i}`)].join("").split(","))
      }
    }
    const schedulesList = sesstionList.flat()
    const categoryList : any = [sessionStorage.getItem("Column")].join("").split(",")
    // console.log(schedulesList,"asdasdas")

    categoryList?.forEach((category: any) => {
      const element = schedulesList?.filter(
        (el: any) =>
          String(el.slice(0,5)) === String(category)
      );
      dataArray.push(element);
    });
    setScheduleArray(dataArray)
    setCategorys(categoryList)
    setSchedules(schedulesList)
  };

  const handleDragStart = async (initial: any) => {
    console.log(initial, "initial");
    const restoreItemArray: any[] = [];

    const schedulesList = schedules;
    console.log(schedulesList)
    // schedulesList.filter((el: any) => {
    //   if (el.scheduleId === initial?.draggableId) {
    //     restoreItemArray.push(el);
    //     setDragItemId(el.scheduleId);
    //   }
    // });
    // setRestoreItem(restoreItemArray[0]);
  };

  const handleDragEnd = async (result: any) => {
    console.log(result, "result");
  };

  return (
    <ExperienceSMAFHTML
      AddColumn={AddColumn}
      categoryName={categoryName}
      handleDragStart={handleDragStart}
      handleDragEnd={handleDragEnd}
    />
  );
}
