import DetailPlanCardHTML from "./detailPlanCard.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "./detailPlanCard.querys";
import { FETCH_LOGIN_USER } from "../../../../commons/teamMember/teamMember.query";

interface DetailPlanCardProps {
  el: any;
  dragItemId: string;
}
export default function DetailPlanCard(props: DetailPlanCardProps) {
  const { data: myData } = useQuery(FETCH_LOGIN_USER);
  const { data: userData } = useQuery(FETCH_USER, {
    variables: {
      userId: props.el.user.userId,
    },
  });

  return (
    <DetailPlanCardHTML
      el={props.el}
      userData={userData}
      myData={myData}
      dragItemId={props.dragItemId}
    />
  );
}
