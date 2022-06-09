import * as S from "./imagecircle.styles";
import { gql, useQuery } from "@apollo/client";
import {
  Query,
  QueryFetchParticipatingUserArgs,
} from "../../../../../commons/types/generated/types";

const FETCH_PARTICIPATING_USER = gql`
  query fetchParticipatingUser($projectId: String!) {
    fetchParticipatingUser(projectId: $projectId) {
      projectParticipantId
      user {
        userName
        userImageURL
      }
    }
  }
`;

export default function ImageCircle(props: any) {
  const { data } = useQuery<
    Pick<Query, "fetchParticipatingUser">,
    QueryFetchParticipatingUserArgs
  >(FETCH_PARTICIPATING_USER, {
    variables: {
      projectId: props.id,
    },
  });

  return (
    <>
      <S.ImageBox>
        {data?.fetchParticipatingUser[4] ? (
          <S.One
            src={data?.fetchParticipatingUser[4]?.user?.userImageURL}
          ></S.One>
        ) : (
          <S.One src={"/image/noprofile.jpg"}></S.One>
        )}

        {data?.fetchParticipatingUser[3] ? (
          <S.Two
            src={data?.fetchParticipatingUser[3]?.user?.userImageURL}
          ></S.Two>
        ) : (
          <S.Two src={"/image/noprofile.jpg"}></S.Two>
        )}

        {data?.fetchParticipatingUser[2] ? (
          <S.Three
            src={data?.fetchParticipatingUser[2]?.user?.userImageURL}
          ></S.Three>
        ) : (
          <S.Three src={"/image/noprofile.jpg"}></S.Three>
        )}

        {data?.fetchParticipatingUser[1] ? (
          <S.Four
            src={data?.fetchParticipatingUser[1]?.user?.userImageURL}
          ></S.Four>
        ) : (
          <S.Four src={"/image/noprofile.jpg"}></S.Four>
        )}

        {data?.fetchParticipatingUser[0] ? (
          <S.Five
            src={data?.fetchParticipatingUser[0]?.user?.userImageURL}
          ></S.Five>
        ) : (
          <S.Five src={"/image/noprofile.jpg"}></S.Five>
        )}
      </S.ImageBox>
    </>
  );
}
