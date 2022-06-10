import DetailPlanCardHTML from "./detailPlanCard.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER, FETCH_PARTICIPATING_USER } from "./detailPlanCard.querys";
import { FETCH_LOGIN_USER } from "../../../../commons/teamMember/teamMember.query";
import { useRouter } from "next/router";
import {
  Query,
  QueryFetchParticipatingUserArgs,
  QueryFetchUserArgs,
} from "../../../../../commons/types/generated/types";

interface DetailPlanCardProps {
  el: any;
  dragItemId: string;
}
export default function DetailPlanCard(props: DetailPlanCardProps) {
  const router = useRouter();
  const { data: myData } =
    useQuery<Pick<Query, "fetchLoginUser">>(FETCH_LOGIN_USER);
  const { data: userData } = useQuery<
    Pick<Query, "fetchUser">,
    QueryFetchUserArgs
  >(FETCH_USER, {
    variables: {
      userId: props.el.user.userId,
    },
  });
  const { data: participatingData } = useQuery<
    Pick<Query, "fetchParticipatingUser">,
    QueryFetchParticipatingUserArgs
  >(FETCH_PARTICIPATING_USER, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });
  //
  return (
    <DetailPlanCardHTML
      el={props.el}
      userData={userData}
      myData={myData}
      participatingData={participatingData}
      dragItemId={props.dragItemId}
    />
  );
}
