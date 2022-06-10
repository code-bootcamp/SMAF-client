import ExperienceSMAFHTML from "./expericence.presenter";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { sessionTriger } from "../../../../../commons/store/index";
import { DropResult } from "react-beautiful-dnd";
export default function ExperienceSMAF() {
  const [categoryName, setCategoryName] = useState<string[][]>([]);
  const [session] = useRecoilState(sessionTriger);
  const [scheduleArray, setScheduleArray] = useState<Array<string[]>>([[]]);
  const [categorys, setCategorys] = useState<string[]>([]);
  const [schedules, setSchedules] = useState<string[]>([]);
  const [restoreItem, setRestoreItem] = useState<string>();
  useEffect(() => {
    setCategoryName([]);
  }, []);

  useEffect(() => {
    DragAndDropData();
    // @ts-ignore
    sessionStorage.setItem("Column", [...categoryName]);
  }, [categoryName, session]);

  const AddColumn = () => {
    // eslint-disable-next-line no-array-constructor
    setCategoryName([
      ...categoryName,
      new Array(1).fill(`${Number(1 + categoryName.length)}번 항목`),
    ]);
  };

  const DragAndDropData = () => {
    const planNum = Number(categoryName.length);
    const dataArray: string[][] = [];
    const sesstionList = [];
    for (let i = 1; i <= planNum; i++) {
      if (sessionStorage.getItem(`Plan${i}`) !== "") {
        sesstionList.push(
          [sessionStorage.getItem(`Plan${i}`)].join("").split(",")
        );
      }
    }
    const schedulesList = sesstionList.flat();
    const categoryList: string[] = [sessionStorage.getItem("Column")]
      .join("")
      .split(",");
    categoryList?.forEach((category: string) => {
      const element = schedulesList?.filter(
        (el: string) => String(el.slice(0, 5)) === String(category)
      );
      dataArray.push(element);
    });
    setScheduleArray(dataArray);
    setCategorys(categoryList);
    setSchedules(schedulesList);
  };

  const handleDragStart = async (initial: { draggableId: string }) => {
    const restoreItemArray: string[] = [];
    const schedulesList = schedules;
    // eslint-disable-next-line array-callback-return
    schedulesList.filter((el: string) => {
      if (el === initial?.draggableId) {
        restoreItemArray.push(el);
      }
    });
    setRestoreItem(restoreItemArray.join(""));
    console.log(initial, "initial");
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result?.destination) return;
    try {
      scheduleArray.forEach((el: string[]) => {
        if (el.includes(String(restoreItem))) {
          const saveItem = el.splice(el.indexOf(String(restoreItem), 1))[0];
          categorys.forEach((category: string, index: number) => {
            if (
              result?.destination !== undefined &&
              result?.destination.droppableId === category
            ) {
              scheduleArray[index].splice(
                Number(result?.destination.index),
                0,
                // @ts-ignore
                saveItem
              );
            }
          });
        }
      });
      setScheduleArray(scheduleArray);
      console.log(result, "result");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ExperienceSMAFHTML
      AddColumn={AddColumn}
      categoryName={categoryName}
      handleDragStart={handleDragStart}
      handleDragEnd={handleDragEnd}
      scheduleArray={scheduleArray}
    />
  );
}
