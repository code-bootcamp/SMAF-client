import * as S from "./imagecircle.styles";
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
// export const FETCH_ACTIVE_PROJECT = gql`
//   query fetchActivatedProject {
//     fetchActivatedProject {
//       projectParticipantId
//       isActivated
//       createdAt
//       user {
//         userName
//       }
//       project {
//         projectId
//         projectName
//         projectIntro
//         projectDetailIntro
//         projectImageURL
//         startDate
//         endDate
//       }
//     }
//   }
// `;

export default function ImageCircle(props: any) {
  const { data } = useQuery(FETCH_PARTICIPATING_USER, {
    variables: {
      projectId: props.id,
    },
  });
  console.log(data, "회원사진 📌");

  // console.log(
  //   data?.fetchParticipatingUser[0]?.user?.userImageURL,
  //   "개인사진 🍏"
  // );

  return (
    <>
      <S.ImageBox>
        <S.One
          src={data?.fetchParticipatingUser[0]?.user?.userImageURL}
        ></S.One>
        <S.Two
          src={data?.fetchParticipatingUser[1]?.user?.userImageURL}
        ></S.Two>
        <S.Three
          src={data?.fetchParticipatingUser[2]?.user?.userImageURL}
        ></S.Three>
        <S.Four
          src={data?.fetchParticipatingUser[3]?.user?.userImageURL}
        ></S.Four>
        <S.Five
          src={data?.fetchParticipatingUser[0]?.user?.userImageURL}
        ></S.Five>
      </S.ImageBox>
    </>
  );
}
