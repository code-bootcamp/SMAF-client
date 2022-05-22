import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
// import { FETCH_PROJECTS_ALL, FETCH_LOGIN_USER } from "./myPage.queris";
import {
  FETCH_ACTIVE_PROJECT,
  FETCH_INACTIVE_PROJECT,
  FETCH_LOGIN_USER,
} from "./myPage.queris";

export default function MyPage() {
  const router = useRouter();

  const { data: userData } = useQuery(FETCH_LOGIN_USER);
  const { data: activeData } = useQuery(FETCH_ACTIVE_PROJECT);
  const { data: inActiveData } = useQuery(FETCH_INACTIVE_PROJECT);

  console.log("로그인유저", userData);

  // 프로젝트 등록하기
  const onClickMoveToNewProject = () => {
    router.push("project/new");
  };

  // 프로젝트 이동
  const onClickMoveToProject = () => {
    router.push(`/project/${router.query.projectId}/`);
  };

  // 프로젝트 이동
  const onClickMoveToPaymentList = () => {
    router.push("mypage/paymentlist");
  };

  return (
    <MyPageUI
      // data={data}
      inActiveData={inActiveData}
      activeData={activeData}
      userData={userData}
      onClickMoveToNewProject={onClickMoveToNewProject}
      onClickMoveToProject={onClickMoveToProject}
      onClickMoveToPaymentList={onClickMoveToPaymentList}
    />
  );
}
