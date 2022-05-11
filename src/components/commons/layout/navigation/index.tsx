// import { useRouter } from "next/router";
import * as S from "./navigation.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutNavigation() {
  const { onClickMoveToPage } = useMoveToPage();
  // const router = useRouter();

  // const MoveMainPage = () => {
  //   router.push("/");
  // };
  // const MoveFreeBoard = () => {
  //   router.push("/board");
  // };
  // const Dogs = () => {
  //   router.push("/dogs");
  // };

  // const Firebase = () => {
  //   router.push("/firebase");
  // };

  // const MoveFreeMarket = () => {
  //   router.push("/market");
  // };
  return (
    <>
      <S.Wrapper>
        <S.HomeBtn onClick={onClickMoveToPage("/")}>Home</S.HomeBtn>
        <S.HomeBtn onClick={onClickMoveToPage("/board")}>FreeBoard</S.HomeBtn>
        <S.HomeBtn onClick={onClickMoveToPage("/dogs")}>Dogs</S.HomeBtn>
        <S.HomeBtn onClick={onClickMoveToPage("/firebase")}>Firebase</S.HomeBtn>
        <S.HomeBtn onClick={onClickMoveToPage("/market")}>FreeMarket</S.HomeBtn>
      </S.Wrapper>
    </>
  );
}
