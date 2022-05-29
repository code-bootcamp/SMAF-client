import ProjectDetailPageHTML from "./detailPage.presenter";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PROJECT,
  FETCH_PROCESS_CATEGORIES,
  FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_LOGIN_USER,
  FETCH_PARTCIPATING_USER,
  FETCH_CATEGORYS,
} from "./detailPage.querys";
import { useRouter } from "next/router";
import { UPDATE_SCHEDULE } from "../../commons/dropdown/05.detailSchduelsDropdown/detailSchduelsDropdown";
import { useRecoilState } from "recoil";
import { triger } from "../../../commons/store/index";


export default function ProjectDetail() {
    const router = useRouter();

  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState<string>();

  const [restoreItem, setRestoreItem] = useState({
    scheduleName: "string",
    scheduleContents: "string",
    scheduleDate: "DateTime",
    status: "boolean",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dragItemId, setDragItemId] = useState("");
  const [scheduleArray, setScheduleArray] = useState([[]]);
  const [categorys, setCategorys] = useState([]);
  const [myDataInProject, setMyDataInProject] = useState<{ position: string }>({
    position: "",
  });

  const [dataTriger] = useRecoilState(triger);
  const [updataSchedule] = useMutation(UPDATE_SCHEDULE);
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
  const { data: partcipatingData } = useQuery(FETCH_PARTCIPATING_USER, {
    variables: {
      projectId: router.query.projectId,
    },
  });

  const { data: myData } = useQuery(FETCH_LOGIN_USER);

  const { data: categorysData } = useQuery(FETCH_CATEGORYS, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  
  // 에러 모달
  const onClickExitErrorModal = () => {
    setErrorAlertModal(false);
  };

  const MyData = () => {
    const myAuth = partcipatingData?.fetchParticipatingUser.filter(
      (el: any) => el.user.userId === myData?.fetchLoginUser?.userId
    )[0];

    setMyDataInProject(myAuth);
  };
  useEffect(() => {
    refetch();
  }, [dataTriger]);

    useEffect(() => {
        setIsLoading(true);
    }, []);

  useEffect(() => {
    DragAndDropData();
  }, [schedulesData, categorysData]);

  useEffect(() => {
    MyData();
  }, [partcipatingData]);

  const OpenFileList = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const DragAndDropData = () => {
    const schedulesList = schedulesData?.fetchProjectSchedules;
    const categoryList = categorysData?.fetchProcessCategories;
    const dataArray: any[] = [];

    categoryList?.forEach((category: any) => {
      const element = schedulesList?.filter(
        (el: any) =>
          el.processCategory.processCategoryId === category.processCategoryId
      );
      dataArray.push(element);
    });
    setScheduleArray(dataArray);
    setCategorys(categoryList);
  };

  const handleDragStart = async (initial: any) => {
    const restoreItemArray: any[] = [];

    const schedulesList = schedulesData?.fetchProjectSchedules;
    // eslint-disable-next-line array-callback-return
    schedulesList.filter((el: any) => {
      if (el.scheduleId === initial?.draggableId) {
        restoreItemArray.push(el);
        setDragItemId(el.scheduleId);
      }
    });
    setRestoreItem(restoreItemArray[0]);
  };

  const handleDragEnd = async (result: any) => {
    // console.log(scheduleArray, "전");

    if (!result?.destination) return;
    try {
      scheduleArray.forEach((el: any) => {
        if (el.includes(restoreItem)) {
          const saveItem = el.splice(el.indexOf(restoreItem), 1)[0];
          categorys.forEach((category: any, index: any) => {
            if (
              result?.destination.droppableId === category.processCategoryId
            ) {
              scheduleArray[index].splice(
                Number(result?.destination.index),
                0,
                saveItem
              );
            }
          });
        }
      });

      setScheduleArray(scheduleArray);
    } catch (error:any) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    } finally {
      if (result?.destination) {
        await updataSchedule({
          variables: {
            scheduleId: result.draggableId,
            updateScheduleInput: {
              scheduleName: restoreItem?.scheduleName,
              scheduleContents: restoreItem?.scheduleContents,
              scheduleDate: restoreItem?.scheduleDate,
              processCategoryId: result?.destination.droppableId,
              status: restoreItem?.status,
            },
          },
        });
      }
    }
  };

  console.log(scheduleArray, "넘겨줄 배열11");

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
      onClickExitErrorModal={onClickExitErrorModal}
      errorAlertModal={errorAlertModal}
      modalContents={modalContents}
      onClickAlertModal={undefined}
      myData={myData}
      myDataInProject={myDataInProject}
      scheduleArray={scheduleArray}
    />
  );
}
