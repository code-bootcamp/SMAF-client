import * as S from "./detailPlanAddModal.styled";
import Alert from "../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../commons/modal/errorModal/alert";
import OneDayPick from "../../../../commons/daypicker/oneDayPick/onedaypicker";
import { DetailPlanAddModalHTMLProps } from "./detailPlanAddModal.tpyes";

export default function DetailPlanAddModalHTML(
  props: DetailPlanAddModalHTMLProps
) {
  return (
    <>
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickConfirmModal}
          contents={props.modalContents}
        />
      )}
      {props.errorAlertModal && (
        <ErrorAlert
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.Wrapper>
        <form
          onSubmit={props.handleSubmit(
            props.CreateNewSchedule as unknown as () => void
          )}
        >
          <S.ProjectName>
            <S.Word>일정 이름</S.Word>
            <S.ProjectNameInput
              {...props.register("scheduleName")}
            ></S.ProjectNameInput>
          </S.ProjectName>
          <S.ProjectContents>
            <S.Word>일정 내용</S.Word>
            <S.ContentsArea
              {...props.register("scheduleContents")}
            ></S.ContentsArea>
          </S.ProjectContents>
          <S.EndDate>
            <S.Word>마감일</S.Word>
            <S.Daypick>
              <OneDayPick />
            </S.Daypick>
            {/* <S.Date {...props.register("scheduleDate")}></S.Date> */}
          </S.EndDate>
          <S.ConfirmBtn>일정 추가하기</S.ConfirmBtn>
        </form>
      </S.Wrapper>
    </>
  );
}
