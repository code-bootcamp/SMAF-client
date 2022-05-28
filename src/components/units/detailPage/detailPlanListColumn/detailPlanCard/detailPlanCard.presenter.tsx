import * as S from "./detailPlanCard.styles";
import DropdownSchduels from "../../../../commons/dropdown/05.detailSchduelsDropdown/detailSchduelsDropdown";
import { DetailPlanCardHTMLProps } from "./detailPlanCard.types";
// import { fetchTriger } from "../../../../../commons/store/index";
// import { useRecoilState } from "recoil";

export default function DetailPlanCardHTML(props: DetailPlanCardHTMLProps) {
  // const [fetchTrigers] = useRecoilState(fetchTriger);
  // console.log(props.el?.scheduleId, "1");
  // console.log(props.dragItemId, "2");
  return (
    <>
      {/* {fetchTrigers && props.el?.scheduleId === props.dragItemId ? (
        <></>
      ) : ( */}
      <S.Wrapper status={props.el?.status}>
        {/* <div>{props.userData?.fetchUser.userName}</div> */}
        <S.SpaceBetweenRow>
          <S.TeamPerson
            src={props.userData?.fetchUser.userImageURL}
          ></S.TeamPerson>
          {props.userData?.fetchUser.userId ===
            props.myData?.fetchLoginUser.userId ||
          props.participatingData?.fetchParticipatingUser?.[0].user.userId ===
            props.myData?.fetchLoginUser.userId ? (
            <DropdownSchduels
              el={props.el}
              id={props.el?.scheduleId}
              categoryId={props.el?.processCategory?.processCategoryId}
            />
          ) : (
            <div></div>
          )}
        </S.SpaceBetweenRow>
        <S.Title>{props.el.scheduleName}</S.Title>
        <S.Contents>{props.el.scheduleContents}</S.Contents>
        <S.Date>{props.el.scheduleDate.slice(0, 10)}</S.Date>
      </S.Wrapper>
      {/* )} */}
    </>
  );
}
