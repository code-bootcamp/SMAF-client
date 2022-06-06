import TeamMemberUI from "./teamMember.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PARTCIPATING_USER,
  DELETE_PARTICIPANT,
  FETCH_LOGIN_USER,
} from "./teamMember.query";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  Query,
  QueryFetchParticipatingUserArgs,
  Mutation,
  MutationDeleteParticipantArgs,
  ProjectParticipant,
  User,
} from "../../../commons/types/generated/types";

export default function TeamMember() {
  const router = useRouter();
  const [deleteParticipantUser] = useMutation<
    Pick<Mutation, "deleteParticipant">,
    MutationDeleteParticipantArgs
  >(DELETE_PARTICIPANT);
  const { data: partcipatingData } = useQuery<
    Pick<Query, "fetchParticipatingUser">,
    QueryFetchParticipatingUserArgs
  >(FETCH_PARTCIPATING_USER, {
    variables: {
      projectId: String(router.query.projectId),
    },
  });
  const { data: myData } = useQuery<{ fetchLoginUser: User }>(FETCH_LOGIN_USER);

  const DeleteParticipant = async (event: MouseEvent<HTMLButtonElement>) => {
    const deleteId = partcipatingData?.fetchParticipatingUser.filter(
      (el: ProjectParticipant) =>
        el.projectParticipantId === (event.target as HTMLButtonElement).id
    );
    try {
      await deleteParticipantUser({
        variables: {
          projectParticipantId: String(deleteId?.[0].projectParticipantId),
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
