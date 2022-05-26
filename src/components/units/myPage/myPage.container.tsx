import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_ACTIVE_PROJECT, FETCH_INACTIVE_PROJECT } from "./myPage.queris";
import { useState } from "react";

export default function MyPage() {
  const router = useRouter();

  const { data: activeData } = useQuery(FETCH_ACTIVE_PROJECT);
  const { data: inActiveData } = useQuery(FETCH_INACTIVE_PROJECT, {
    variables: { standard: "최신순" },
  });

  const [show, setShow] = useState(false);

  // console.log("진행중인프로젝트", activeData);
  // console.log("지난프로젝트", inActiveData);

  // 프로젝트 등록하기
  const onClickMoveToNewProject = () => {
    router.push("project/new");
  };

  // 결제내역 이동
  // const onClickMoveToPaymentList = () => {
  //   // router.push("mypage/paymentlist");
  //   setShow(true);
  // };

  // 프로젝트 상세로 이동
  // const onClickMoveToDetail = () => {
  //   setShow(true);
  // };

  // const [visible, setVisible] = useState(true);
  // const onPress = () => {
  //   setVisible(!visible);
  // };
  // const onPress02 = () => {
  //   setVisible(visible);
  // };

  return (
    <MyPageUI
      inActiveData={inActiveData}
      activeData={activeData}
      onClickMoveToNewProject={onClickMoveToNewProject}
      // onPress={onPress}
      // onPress02={onPress02}
      // visible={visible}
    />
  );
}
