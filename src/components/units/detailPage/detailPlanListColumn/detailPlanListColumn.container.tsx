import DetailPlanListColumnHTML from "./detailPlanListColumn.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  // FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
  DELETE_CATEGORY,
  FETCH_PROCESS_CATEGORIES,
} from "./detailPlanListColumn.querys";
import { useRouter } from "next/router";

export default function DetailPlanListColumn(props: any) {
  const router = useRouter();
  // const router = useRouter();
  // const { data: schedulesData } = useQuery(FETCH_PROJECT_SCHEDULES_PROJECTID, {
  //   variables: {
  //     projectId: router.query.projectId,
  //   },
  // });
  // console.log(schedulesData, "dataFormProjectId");
  const { data: scheduleData } = useQuery(FETCH_PROJECT_SCHEDULES_CATEGORY, {
    variables: {
      processCategoryId: props.el.processCategoryId,
    },
  });
  // console.log(
  //   schedulesData?.fetchProjectSchedules[0].processCategory.processCategoryId,
  //   "id"
  // );
  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const DeleteCategory = async () => {
    try {
      await deleteCategory({
        variables: {
          processCategoryId: props.el.processCategoryId,
        },
        refetchQueries: [
          {
            query: FETCH_PROCESS_CATEGORIES,
            variables: {
              projectId: router.query.projectId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <DetailPlanListColumnHTML
      columnData={props.el}
      scheduleData={scheduleData}
      DeleteCategory={DeleteCategory}
    />
  );
}
