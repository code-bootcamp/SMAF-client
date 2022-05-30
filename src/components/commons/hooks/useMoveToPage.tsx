import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store/index";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const MoveToPage = (path: string) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    MoveToPage,
  };
}
