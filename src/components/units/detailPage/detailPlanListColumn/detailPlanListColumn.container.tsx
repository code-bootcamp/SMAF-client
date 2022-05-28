import DetailPlanListColumnHTML from "./detailPlanListColumn.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  // FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
  DELETE_CATEGORY,
  FETCH_PROCESS_CATEGORIES,
  FETCH_PARTICIPATING_USER,
  FETCH_LOGIN_USER,
} from "./detailPlanListColumn.querys";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function DetailPlanListColumn(props: any) {

  const router = useRouter();
  // const router = useRouter();
  const [my, setMy] = useState();
  const { data: participatingData } = useQuery(FETCH_PARTICIPATING_USER, {
    variables: {
      projectId: router.query.projectId,
    },
  });

  const { data: scheduleData } = useQuery(FETCH_PROJECT_SCHEDULES_CATEGORY, {
    variables: {
      processCategoryId: props.el.processCategoryId,
    },
  });
  const { data: myData } = useQuery(FETCH_LOGIN_USER);

  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const Mydata = () => {
    const me = participatingData?.fetchParticipatingUser.filter(
      (el: any) => el.user.userId === myData?.fetchLoginUser.userId
    );
    setMy(me);
  };

  useEffect(() => {
    Mydata();
  }, [participatingData]);
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
      participatingData={participatingData}
      DeleteCategory={DeleteCategory}
      dragItemId={props.dragItemId}
      my={my}
    />
  );
}
