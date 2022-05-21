import DetailPlanListColumnHTML from "./detailPlanListColumn.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
} from "./detailPlanListColumn.querys";
import { useRouter } from "next/router";

export default function DetailPlanListColumn(props: any) {
  const router = useRouter();
  const { data: schedulesData } = useQuery(FETCH_PROJECT_SCHEDULES_PROJECTID, {
    variables: {
      projectId: router.query.projectId,
    },
  });
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
  return (
    <DetailPlanListColumnHTML
      columnData={props.el}
      scheduleData={scheduleData}
    />
  );
}
