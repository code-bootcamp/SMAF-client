import ExperienceSMAFHTML from "./expericence.presenter";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { sessionTriger } from "../../../../../commons/store/index";
export default function ExperienceSMAF() {
    const [categoryName, setCategoryName] = useState<string[] | any[]>([]);
    const [session] = useRecoilState(sessionTriger);
    const [scheduleArray, setScheduleArray] = useState([[]]);
    const [categorys, setCategorys] = useState([]);
    const [schedules, setSchedules] = useState<any[]>([]);
    const [restoreItem, setRestoreItem] = useState<any>();
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
        const dataArray: any[] = [];
        const sesstionList = [];
        for (let i = 1; i <= planNum; i++) {
            if (sessionStorage.getItem(`Plan${i}`) !== "") {
                sesstionList.push([sessionStorage.getItem(`Plan${i}`)].join("").split(","));
            }
        }
        const schedulesList = sesstionList.flat();
        const categoryList: any = [sessionStorage.getItem("Column")].join("").split(",");
        categoryList?.forEach((category: any) => {
            const element = schedulesList?.filter(
                (el: any) => String(el.slice(0, 5)) === String(category)
            );
            dataArray.push(element);
        });
        setScheduleArray(dataArray);
        setCategorys(categoryList);
        setSchedules(schedulesList);
    };

    const handleDragStart = async (initial: any) => {
        // console.log(initial, "initial");
        const restoreItemArray: any[] = [];
        const schedulesList = schedules;
        // eslint-disable-next-line array-callback-return
        schedulesList.filter((el: any) => {
            if (el === initial?.draggableId) {
                restoreItemArray.push(el);
            }
        });
        setRestoreItem(restoreItemArray.join(""));
    };

    const handleDragEnd = async (result: any) => {
        // console.log(result, "result");
        // console.log(restoreItem, "asdasddas");
        // console.log(scheduleArray, "scheduleArray");
        // console.log(categorys, "categorys");
        if (!result?.destination) return;
        try {
            scheduleArray.forEach((el: any) => {
                if (el.includes(String(restoreItem))) {
                    const saveItem = el.splice(el.indexOf(String(restoreItem), 1))[0];
                    categorys.forEach((category: any, index: any) => {
                        if (result?.destination.droppableId === category) {
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
        } catch (error: any) {
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
