import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PROJECTS_ALL, FETCH_USER } from "./myPage.queris";

export default function MyPage() {
  const { data } = useQuery(FETCH_PROJECTS_ALL, {});
  const { data: userData } = useQuery(FETCH_USER);
  const router = useRouter();

  console.log(userData);

  // 프로젝트 등록하기
  const onClickMoveToNewProject = () => {
    router.push("project/new");
  };

  // 프로젝트 이동
  const onClickMoveToProject = () => {
    router.push(`/market/${router.query.projectId}/`);
  };

  return (
    <MyPageUI
      data={data}
      userData={userData}
      onClickMoveToNewProject={onClickMoveToNewProject}
      onClickMoveToProject={onClickMoveToProject}
    />
  );
}
