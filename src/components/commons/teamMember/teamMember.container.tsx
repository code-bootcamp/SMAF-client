import TeamMemberUI from "./teamMember.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PARTCIPATING_USER,
  DELETE_PARTICIPANT,
  FETCH_LOGIN_USER,
} from "./teamMember.query";
import { useRouter } from "next/router";

export default function TeamMember() {
  const router = useRouter();
  const [deleteParticipantUser] = useMutation(DELETE_PARTICIPANT);
  const { data: partcipatingData } = useQuery(FETCH_PARTCIPATING_USER, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  const { data: myData } = useQuery(FETCH_LOGIN_USER);

  const DeleteParticipant = async (event: any) => {
    const deleteId = partcipatingData.fetchParticipatingUser.filter(
      (el: any) => el.projectParticipantId === event.target.id
    );
    try {
      await deleteParticipantUser({
        variables: {
          projectParticipantId: deleteId?.[0].projectParticipantId,
        },
        refetchQueries: [
          {
            query: FETCH_PARTCIPATING_USER,
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
    <TeamMemberUI
      partcipatingData={partcipatingData}
      DeleteParticipant={DeleteParticipant}
      myData={myData}
    />
  );
}
