import ProjectDetailPageHTML from "./detailPage.presenter";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PROJECT,
  FETCH_PROCESS_CATEGORIES,
  DELETE_SCHEDULE,
  CREATE_SCHEDULE,
} from "./detailPage.querys";
import { useRouter } from "next/router";
import { FETCH_PROJECT_SCHEDULES_PROJECTID } from "./detailPlanListColumn/detailPlanListColumn.querys";

export default function ProjectDetail() {
  const router = useRouter();
  // const [scheduleName, setScheduleName] = useState("");
  const [boardData, setBoardData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteSchedule] = useMutation(DELETE_SCHEDULE);
  const [createSchedule] = useMutation(CREATE_SCHEDULE);
  const { data: projectData } = useQuery(FETCH_PROJECT, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  const { data: categoriesData } = useQuery(FETCH_PROCESS_CATEGORIES, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  const { data: schedulesData } = useQuery(FETCH_PROJECT_SCHEDULES_PROJECTID, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  useEffect(() => {
    setBoardData(schedulesData?.fetchProjectSchedules);
    // setTitleData(boardData);
  }, [schedulesData]);

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

  const handleDragEnd = async (result: any) => {
    console.log(result, "함수 초기 결과값");
    if (!result.destination) {
      return;
    }
    const items = [...boardData];
    console.log(items, "아이템리스트");
    // const [reorderedItem] = items.splice(result?.source?.index, 1);
    const [reorderedItem] = items.filter(
      (el: any) => el.scheduleId === result.draggableId
    );
    console.log(reorderedItem?.scheduleName, "재사용할 아이템");
    // 여기서 reorderedItem 데이터로 del을 해주면됨
    try {
      await deleteSchedule({
        variables: {
          scheduleId: String(result.draggableId),
        },
      });
    } catch (error) {
      alert("삭제error");
    }
    try {
      await createSchedule({
        variables: {
          createScheduleInput: {
            scheduleName: reorderedItem?.scheduleName,
            scheduleDate: reorderedItem?.scheduleDate,
            processCategoryId: result?.destination?.droppableId,
            projectId: router.query.projectId,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT_SCHEDULES_PROJECTID,
            variables: {
              projectId: router.query.projectId,
            },
          },
        ],
      });
    } catch (error) {
      alert("생성error");
    }
    // items.splice(Number(result?.destination?.droppableId), 0, reorderedItem);
    // setBoardData(items);
  };

  return (
    <ProjectDetailPageHTML
      isOpen={isOpen}
      OpenFileList={OpenFileList}
      projectData={projectData}
      categoriesData={categoriesData}
      handleDragEnd={handleDragEnd}
      isLoading={isLoading}
    />
  );
}
