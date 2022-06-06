import moment from "antd/node_modules/moment";
import * as S from "./schedules.styles";
import Todo from "../todo/todo.container";
import { v4 as uuidv4 } from "uuid";
import PaymentModal from "../modal/paymentModal/paymentModal.container";
import { useRef } from "react";
import { SchedulesUIProps } from "./schedules.types";
import { ProjectParticipant } from "../../../commons/types/generated/types";

export default function SchedulesUI(props: SchedulesUIProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <S.Container>
        <S.DateBox>
          <S.DateInfo>
            <S.Date onClick={props.CloseSchedules}>
              {moment(props.value).format("YYYY년 MM월 DD일")}
            </S.Date>
            <S.Direction>
              <S.LDirectionBtn onClick={props.onClickBefore}>
                ＜
              </S.LDirectionBtn>
              <S.RDirectionBtn onClick={props.onClickAfter}>＞</S.RDirectionBtn>
            </S.Direction>
          </S.DateInfo>
          {props.myData !== undefined &&
          !(props.myData?.fetchLoginUser.projectTicket <= 0) ? (
            <S.AddBtn onClick={props.onClickToProjectSignUp}>
              + 프로젝트 생성
            </S.AddBtn>
          ) : (
            <>
              <S.AddBtn onClick={onClickUpload}>+ 프로젝트 생성</S.AddBtn>
              <PaymentModal fileRef={fileRef} />
            </>
          )}
        </S.DateBox>
        <S.Wrapper>
          {props.ParticipatingData?.fetchParticipatingProject.map(
            (el: ProjectParticipant) => (
              <Todo
                key={uuidv4()}
                projectId={el.project?.projectId}
                today={props.value}
              />
            )
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
