import TeamMemberUI from "./teamMember.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_PARTCIPATING_USER } from "./teamMember.query";
import { useRouter } from "next/router";

export default function TeamMember() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PARTCIPATING_USER, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  console.log(data, "asd");
  return <TeamMemberUI />;
}
