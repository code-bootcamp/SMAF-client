import ProjectDetailPageHTML from "./detailPage.presenter";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PROJECT,
  FETCH_PROCESS_CATEGORIES,
  FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
} from "./detailPage.querys";
import { useRouter } from "next/router";
import { UPDATE_SCHEDULE } from "../../commons/dropdown/05.detailSchduelsDropdown/detailSchduelsDropdown";
import { useRecoilState } from "recoil";
import { triger, fetchTriger } from "../../../commons/store/index";

export default function ProjectDetail() {
  const router = useRouter();
  const [deletedItem, setDeletedItem] = useState({
    scheduleName: "string",
    scheduleContents: "string",
    scheduleDate: "DateTime",
    status: "boolean",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dragItemId, setDragItemId] = useState("");
  const [dataTriger] = useRecoilState(triger);
  const [, setFetchTriger] = useRecoilState(fetchTriger);
  // const [deleteSchedule] = useMutation(DELETE_SCHEDULE);
  // const [createSchedule] = useMutation(CREATE_SCHEDULE);
  // const [updateCategory] = useMutation(UPDATE_PROCESS_CATEGORY);
  const [updataSchedule] = useMutation(UPDATE_SCHEDULE);
  // const [updateSchedule] = useMutation(UPDATE_PROCESS_CATEGORY);
  const { data: projectData } = useQuery(FETCH_PROJECT, {
    variables: {
      projectId: router.query.projectId,
    },
  });

  // console.log("디테일", projectData);
  const { data: categoriesData } = useQuery(FETCH_PROCESS_CATEGORIES, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  // console.log(categoriesData);
  const { data: schedulesData, refetch } = useQuery(
    FETCH_PROJECT_SCHEDULES_PROJECTID,
    {
      variables: {
        projectId: router.query.projectId,
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [dataTriger]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const OpenFileList = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleDragStart = async (initial: any) => {
    // console.log(initial, "이니셜");
    const restoreItemArray: any[] = [];
    // eslint-disable-next-line array-callback-return
    schedulesData?.fetchProjectSchedules.filter((el: any) => {
      if (el.scheduleId === initial?.draggableId) {
        restoreItemArray.push(el);
        setDragItemId(el.scheduleId);
      }
    });
    setDeletedItem(restoreItemArray[0]);
  };

  const Triger = () => {
    setFetchTriger(true);
  };
  const handleDragEnd = async (result: any) => {
    // ===========================================================================
    // console.log(deletedItem, "아이템");
    // setFetchTriger(true);
    if (!result.destination || result.destination === null) return;
    await new Promise((resolve, reject) => {
      resolve(Triger());
    });
    try {
      await updataSchedule({
        variables: {
          scheduleId: result.draggableId,
          updateScheduleInput: {
            scheduleName: deletedItem?.scheduleName,
            scheduleContents: deletedItem?.scheduleContents,
            scheduleDate: deletedItem?.scheduleDate,
            processCategoryId: result?.destination.droppableId,
            status: deletedItem?.status,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT_SCHEDULES_CATEGORY,
            variables: {
              processCategoryId: result?.source?.droppableId,
            },
          },
          {
            query: FETCH_PROJECT_SCHEDULES_CATEGORY,
            variables: {
              processCategoryId: result?.destination?.droppableId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    } finally {
      setFetchTriger(false);
    }

    // ===========================================================================
    // console.log(result, "함수 초기 결과값");
    // console.log(itemIndex, "targetIndex");
    // console.log(deletedItem, "deleted");
    // [...schedulesData?.fetchProjectSchedules].splice(Number(itemIndex), 1);
    // console.log(bbb, "111");
    // console.log(Array, "array");
    // bbb.splice(Number(itemIndex), 1);
    // console.log(bbb, "array");
    // try {
    //   await updateCategory({
    //     variables: {
    //       processName: deletedItem?.processCategory?.processName,
    //       processCategoryId: result?.source.droppableId,
    //     },
    //     refetchQueries: [
    //       {
    //         query: FETCH_PROJECT_SCHEDULES_CATEGORY,
    //         variables: {
    //           processCategoryId: result?.source.droppableId,
    //         },
    //       },
    //     ],
    //   });
    // } catch (error) {
    //   alert(error);
    // } finally {
    //   refetch();
    // }
    // if (result.destination === null) {
    //   schedulesData?.fetchProjectSchedules.splice(
    //     Number(itemIndex) - 1,
    //     0,
    //     deletedItem
    //   );
    // }
    // const items = [...boardData];
    // ===========================================================================
    // console.log(schedulesData?.fetchProjectSchedules, "아이템리스트");
    // const [reorderedItem] = schedulesData?.fetchProjectSchedules.filter(
    //   (el: any) => el.scheduleId === result.draggableId
    // );
    // console.log(reorderedItem, "재사용할 아이템");
    // if (
    //   reorderedItem?.processCategory?.processCategoryId ===
    //     result?.destination?.droppableId &&
    //   result?.destination.index === result?.source.index
    // ) {
    //   return;
    // }
    // try {
    //   await deleteSchedule({
    //     variables: {
    //       scheduleId: String(result.draggableId),
    //     },
    //     refetchQueries: [
    //       {
    //         query: FETCH_PROJECT_SCHEDULES_CATEGORY,
    //         variables: {
    //           processCategoryId:
    //             reorderedItem.processCategory.processCategoryId,
    //         },
    //       },
    //     ],
    //   });
    //   await createSchedule({
    //     variables: {
    //       createScheduleInput: {
    //         scheduleName: reorderedItem?.scheduleName,
    //         scheduleDate: reorderedItem?.scheduleDate,
    //         scheduleContents: "aaa",
    //         processCategoryId: result?.destination?.droppableId,
    //         projectId: router.query.projectId,
    //       },
    //     },
    //     refetchQueries: [
    //       {
    //         query: FETCH_PROJECT_SCHEDULES_CATEGORY,
    //         variables: {
    //           processCategoryId: result?.destination?.droppableId,
    //         },
    //       },
    //     ],
    //   });
    // } catch (error) {
    //   alert(error);
    // } finally {
    //   refetch();
    // }
  };

  return (
    <ProjectDetailPageHTML
      isOpen={isOpen}
      OpenFileList={OpenFileList}
      projectData={projectData}
      categoriesData={categoriesData}
      handleDragStart={handleDragStart}
      handleDragEnd={handleDragEnd}
      isLoading={isLoading}
      dragItemId={dragItemId}
    />
  );
}
