import DetailPlanListColumnHTML from "./detailPlanListColumn.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  DELETE_CATEGORY,
  FETCH_PROCESS_CATEGORIES,
  FETCH_PARTICIPATING_USER,
  FETCH_LOGIN_USER,
} from "./detailPlanListColumn.querys";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { triger } from "../../../../commons/store/index";
import { useRecoilState } from "recoil";
import { IDetailPlanListColumnProps } from "./detailPlanListColumn.types";
import {
  Mutation,
  MutationDeleteProcessCategoryArgs,
  ProjectParticipant,
  Query,
  QueryFetchParticipatingUserArgs,
} from "../../../../commons/types/generated/types";

export default function DetailPlanListColumn(
  props: IDetailPlanListColumnProps
) {
  const router = useRouter();
  const [my, setMy] = useState({});
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState<string>();

  const [, setDataTriger] = useRecoilState(triger);

  const { data: participatingData } = useQuery<
    Pick<Query, "fetchParticipatingUser">,
    QueryFetchParticipatingUserArgs
  >(FETCH_PARTICIPATING_USER, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });

  const { data: myData } =
    useQuery<Pick<Query, "fetchLoginUser">>(FETCH_LOGIN_USER);
  const [deleteCategory] = useMutation<
    Pick<Mutation, "deleteProcessCategory">,
    MutationDeleteProcessCategoryArgs
  >(DELETE_CATEGORY);

  const Mydata = () => {
    const me: ProjectParticipant | undefined =
      participatingData?.fetchParticipatingUser.filter(
        (el) => el.user.userId === myData?.fetchLoginUser.userId
      )[0];
    if (me !== undefined) {
      setMy(me);
    }
  };

  // 에러 모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
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
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      setModalContents(message);
      setErrorAlertModal(true);
    } finally {
      setDataTriger((prev) => !prev);
    }
  };
  return (
    <DetailPlanListColumnHTML
      columnData={props.el}
      participatingData={participatingData}
      DeleteCategory={DeleteCategory}
      dragItemId={props.dragItemId}
      my={my}
      scheduleArray={props.scheduleArray}
      errorAlertModal={errorAlertModal}
      modalContents={modalContents}
      onClickErrorModal={onClickErrorModal}
    />
  );
}
