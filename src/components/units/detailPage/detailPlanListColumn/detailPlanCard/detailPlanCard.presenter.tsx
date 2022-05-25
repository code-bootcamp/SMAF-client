import * as S from "./detailPlanCard.styles";
import DropdownSchduels from "../../../../commons/dropdown/05.detailSchduelsDropdown/detailSchduelsDropdown";
import { DetailPlanCardHTMLProps } from "./detailPlanCard.types";

export default function DetailPlanCardHTML(props: DetailPlanCardHTMLProps) {
  // console.log(props.el, "el");
  // console.log(props.myData, "myData");

  return (
    <>
      <S.Wrapper status={props.el?.status}>
        {/* <div>{props.userData?.fetchUser.userName}</div> */}
        <S.SpaceBetweenRow>
          <S.TeamPerson
            src={props.userData?.fetchUser.userImageURL}
          ></S.TeamPerson>
          {props.userData?.fetchUser.userId ===
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
    </>
  );
}
