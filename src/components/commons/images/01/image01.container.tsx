import * as S from "./image01.styles";
import { gql, useQuery } from "@apollo/client";

// fetchParticipatingUser

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

// 참여중인 프로젝트 목록
export const FETCH_ACTIVE_PROJECT = gql`
  query fetchActivatedProject {
    fetchActivatedProject {
      projectParticipantId
      isActivated
      createdAt
      user {
        userName
      }
      project {
        projectId
        projectName
        projectIntro
        projectDetailIntro
        projectImageURL
        startDate
        endDate
      }
    }
  }
`;

export default function ImageCircle(props: any) {
  const { data } = useQuery(FETCH_PARTICIPATING_USER, {
    variables: {
      projectId: props.id,
    },
  });
  // console.log(data, "회원사진 📌");
  // console.log(data?.fetchInactivatedProject, "사진 📌");

  return (
    <>
      <S.ImageBox>
        <S.One></S.One>
        <S.Two></S.Two>
        <S.Three></S.Three>
        <S.Four></S.Four>
        <S.Five></S.Five>
      </S.ImageBox>
    </>
  );
}
