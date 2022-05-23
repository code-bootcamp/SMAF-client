import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_ACTIVE_PROJECT, FETCH_INACTIVE_PROJECT } from "./myPage.queris";

export default function MyPage() {
  const router = useRouter();

  const { data: activeData } = useQuery(FETCH_ACTIVE_PROJECT);
  const { data: inActiveData } = useQuery(FETCH_INACTIVE_PROJECT);

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
      inActiveData={inActiveData}
      activeData={activeData}
      onClickMoveToNewProject={onClickMoveToNewProject}
      onClickMoveToProject={onClickMoveToProject}
      onClickMoveToPaymentList={onClickMoveToPaymentList}
    />
  );
}
