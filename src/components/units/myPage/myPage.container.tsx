import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_ACTIVE_PROJECT, FETCH_INACTIVE_PROJECT } from "./myPage.queris";
import { FETCH_LOGIN_USER } from "../../../components/commons/userInfoCard/01/userInfoCard01.queris";
import { useState } from "react";
import {
  Query,
  QueryFetchInactivatedProjectArgs,
  User,
} from "../../../commons/types/generated/types";

export default function MyPage() {
  const router = useRouter();
  const { data: userData } = useQuery<Pick<Query, "fetchLoginUser">, User>(
    FETCH_LOGIN_USER
  );
  const { data: activeData } = useQuery(FETCH_ACTIVE_PROJECT);
  const { data: inActiveData } = useQuery<
    Pick<Query, "fetchInactivatedProject">,
    QueryFetchInactivatedProjectArgs
  >(FETCH_INACTIVE_PROJECT, {
    variables: { standard: "최신순" },
  });

  const [visible, setVisible] = useState(true);

  const onClickMoveToNewProject = () => {
    router.push("project/new");
  };
  const onClickMoveToPaymentList = () => {
    setVisible(false);
  };
  const onClickMoveToMyPage = () => {
    setVisible(true);
  };
  const onClickMoveToPasswordChange = () => {
    router.push("signup/changePassword");
  };

  return (
    <MyPageUI
      visible={visible}
      inActiveData={inActiveData}
      activeData={activeData}
      userData={userData}
      onClickMoveToNewProject={onClickMoveToNewProject}
      onClickMoveToPaymentList={onClickMoveToPaymentList}
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickMoveToPasswordChange={onClickMoveToPasswordChange}
    />
  );
}
