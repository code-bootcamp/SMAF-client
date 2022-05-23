import * as S from "./detailPlanAddModal.styled";
import { IDetailPlanAddModalProps } from "./detailPlanAddModal.tpyes";
// import DayPick from "../../../../commons/daypicker/daypicker";

export default function DetailPlanAddModalHTML(
  props: IDetailPlanAddModalProps
) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.CreateNewSchedule)}>
        <S.ProjectName>
          <S.Word>프로젝트 명</S.Word>
          <S.ProjectNameInput
            {...props.register("scheduleName")}
          ></S.ProjectNameInput>
        </S.ProjectName>
        <S.ProjectContents>
          <S.Word>일정내용</S.Word>

          <S.ContentsArea
            {...props.register("scheduleContents")}
          ></S.ContentsArea>
        </S.ProjectContents>
        {/* <DayPick/> */}
        <S.EndDate>
          <S.Word>마감일</S.Word>
          <S.Date {...props.register("scheduleDate")}></S.Date>
        </S.EndDate>
        <S.ConfirmBtn>일정 추가하기</S.ConfirmBtn>
      </form>
    </S.Wrapper>
  );
}
