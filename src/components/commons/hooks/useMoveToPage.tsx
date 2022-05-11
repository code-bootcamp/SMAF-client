import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store/index";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const MoveToPage = (path: string) => () => {
    setVisitedPage(path); // 이동하기전 현재 페이지의 패스(경로) 지정
    router.push(path);
  };

  return {
    visitedPage,
    MoveToPage,
  };
}

// 사용법
// 1. import { useMoveToPage } from "경로"
// 2. const { MoveToPage } = useMoveToPage();
// 3. onClick={onClickMoveToPage("경로")}
