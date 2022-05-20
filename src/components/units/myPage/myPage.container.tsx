import MyPageUI from "./myPage.presenter";
import { useRouter } from "next/router";

export default function MyPage() {
  const router = useRouter();

  const onClickMoveToNewProject = () => {
    router.push("project/new");
  };
  return <MyPageUI onClickMoveToNewProject={onClickMoveToNewProject} />;
}
