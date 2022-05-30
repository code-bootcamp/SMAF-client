import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_ACTIVE_PROJECT, FETCH_INACTIVE_PROJECT } from "./myPage.queris";
import { FETCH_LOGIN_USER } from "../../../components/commons/userInfoCard/01/userInfoCard01.queris";
import { useState } from "react";

export default function MyPage() {
    const router = useRouter();
    const { data: userData } = useQuery(FETCH_LOGIN_USER);
    const { data: activeData } = useQuery(FETCH_ACTIVE_PROJECT);
    const { data: inActiveData } = useQuery(FETCH_INACTIVE_PROJECT, {
        variables: { standard: "최신순" },
    });
    const [visible, setVisible] = useState(true);

    // 프로젝트 등록하기
    const onClickMoveToNewProject = () => {
        router.push("project/new");
    };

    // 결제내역 이동
    const onClickMoveToPaymentList = () => {
        setVisible(false);
    };

    // 마이페이지 이동
    const onClickMoveToMyPage = () => {
        setVisible(true);
    };

    // 설정(비밀번호 변경으로 이동)
    const onClickMoveToPasswordChange = () => {
        router.push("signup/changePassword");
    };

    // 프로젝트 상세로 이동
    const onClickMoveToProjectDetail = (event: any) => {
        if (event.target instanceof Element) router.push(`/project/${event.target.id}`);
    };

    return (
        <MyPageUI
            inActiveData={inActiveData}
            activeData={activeData}
            userData={userData}
            onClickMoveToNewProject={onClickMoveToNewProject}
            onClickMoveToPaymentList={onClickMoveToPaymentList}
            onClickMoveToMyPage={onClickMoveToMyPage}
            onClickMoveToPasswordChange={onClickMoveToPasswordChange}
            onClickMoveToProjectDetail={onClickMoveToProjectDetail}
            visible={visible}
        />
    );
}
