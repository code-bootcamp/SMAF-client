import ProjectDetailPageHTML from "./detailPage.presenter";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PROJECT,
  FETCH_PROCESS_CATEGORIES,
  FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_LOGIN_USER,
  FETCH_PARTCIPATING_USER,
} from "./detailPage.querys";
import { useRouter } from "next/router";
import { UPDATE_SCHEDULE } from "../../commons/dropdown/05.detailSchduelsDropdown/detailSchduelsDropdown";
import { useRecoilState } from "recoil";
import { triger } from "../../../commons/store/index";
import {
  QueryFetchProjectSchedulesArgs,
  QueryFetchParticipatingUserArgs,
  QueryFetchProjectArgs,
  Query,
  Mutation,
  QueryFetchProcessCategoriesArgs,
  MutationUpdateScheduleArgs,
  ProcessCategory,
  ProjectParticipant,
  User,
  Schedule,
} from "../../../commons/types/generated/types";
import { DropResult } from "react-beautiful-dnd";

export default function ProjectDetail() {
  const router = useRouter();

  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState<string>();
  const [restoreItem, setRestoreItem] = useState({
    scheduleName: "string",
    scheduleContents: "string",
    scheduleDate: "DateTime",
    status: true,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dragItemId, setDragItemId] = useState("");
  const [scheduleArray, setScheduleArray] = useState<Schedule[][]>([[]]);
  const [categorys, setCategorys] = useState<ProcessCategory[] | undefined>([]);
  const [myDataInProject, setMyDataInProject] = useState({});
  const [dataTriger] = useRecoilState(triger);

  const [updataSchedule] = useMutation<
    Pick<Mutation, "updateSchedule">,
    MutationUpdateScheduleArgs
  >(UPDATE_SCHEDULE);
  const { data: projectData } = useQuery<
    Pick<Query, "fetchProject">,
    QueryFetchProjectArgs
  >(FETCH_PROJECT, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });
  const { data: categoriesData } = useQuery<
    Pick<Query, "fetchProcessCategories">,
    QueryFetchProcessCategoriesArgs
  >(FETCH_PROCESS_CATEGORIES, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });
  const { data: schedulesData, refetch } = useQuery<
    Pick<Query, "fetchProjectSchedules">,
    QueryFetchProjectSchedulesArgs
  >(FETCH_PROJECT_SCHEDULES_PROJECTID, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });
  const { data: partcipatingData } = useQuery<
    Pick<Query, "fetchParticipatingUser">,
    QueryFetchParticipatingUserArgs
  >(FETCH_PARTCIPATING_USER, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });

  const { data: myData } = useQuery<Pick<Query, "fetchLoginUser">, User>(
    FETCH_LOGIN_USER
  );

  // 에러 모달
  const onClickExitErrorModal = () => {
    setErrorAlertModal(false);
  };

  const MyData = () => {
    const myAuth: ProjectParticipant | undefined =
      partcipatingData?.fetchParticipatingUser.filter(
        (el) => el.user.userId === myData?.fetchLoginUser?.userId
      )[0];
    if (myAuth !== undefined) {
      setMyDataInProject(myAuth);
    }
  };
  useEffect(() => {
    refetch();
  }, [dataTriger]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    DragAndDropData();
  }, [schedulesData, categoriesData]);

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
    const categoryList = categoriesData?.fetchProcessCategories;
    const dataArray: Array<Schedule[]> = [];

    categoryList?.forEach((category) => {
      const element = schedulesList?.filter(
        (el) =>
          el.processCategory.processCategoryId === category.processCategoryId
      );
      if (element) {
        dataArray.push(element);
      }
    });
    setScheduleArray(dataArray);
    setCategorys(categoryList);
  };

  const handleDragStart = async (initial: { draggableId: string }) => {
    const restoreItemArray: Schedule[] = [];

    const schedulesList = schedulesData?.fetchProjectSchedules;
    // eslint-disable-next-line array-callback-return
    schedulesList?.filter((el) => {
      if (el.scheduleId === initial?.draggableId) {
        restoreItemArray.push(el);
        setDragItemId(el.scheduleId);
      }
    });
    setRestoreItem(restoreItemArray[0]);
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result?.destination) return;
    try {
      scheduleArray?.forEach((el: object[]) => {
        if (el.includes(restoreItem)) {
          const saveItem = el.splice(el.indexOf(restoreItem), 1)[0];
          categorys?.forEach((category, index) => {
            if (
              result?.destination !== undefined &&
              result?.destination.droppableId === category.processCategoryId
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
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      setModalContents(message);
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
      myData={myData}
      myDataInProject={myDataInProject}
      scheduleArray={scheduleArray}
    />
  );
}
