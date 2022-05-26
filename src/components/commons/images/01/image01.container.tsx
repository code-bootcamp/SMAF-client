import * as S from "./image01.styles";
import { gql, useQuery } from "@apollo/client";

// fetchParticipatingUser

const FETCH_PARTICIPATING_USER = gql`
  query fetchParticipatingUser($projectId: String!) {
    fetchParticipatingUser(projectId: $projectId) {
      projectParticipantId
      user {
        userName
        userImageURL0
      }
      project {
        projectId
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

export default function ImageCircle() {
  const { data: activeData } = useQuery(FETCH_ACTIVE_PROJECT);

  const ddd = activeData?.fetchActivatedProject;

  // const { data } = useQuery(FETCH_PARTICIPATING_USER, {
  //   variables: {
  //     projectId: aaa(),
  //   },
  // });

  // console.log("gsadgs", data);

  // console.log("이거다", activeData?.fetchActivatedProject);

  return (
    <>
      {/* {data.fetchParticipatingUser} */}
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
