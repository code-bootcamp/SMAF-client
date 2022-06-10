import QuestionAnswerWriteUI from "./questionAnswerWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_QUESTION_BOARD } from "./questionAnswerWrite.queris";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { dropdownKey } from "../../../../commons/store";
import { useState } from "react";
import { CreateQuestionBoardInput } from "../../../../commons/types/generated/types";
import { QuestionAnswerWriteProps } from "./questionAnswerWrite.types";

export default function QuestionAnswerWrite(_props: QuestionAnswerWriteProps) {
  const router = useRouter();
  const [createQuestionBoard] = useMutation(CREATE_QUESTION_BOARD);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [select] = useRecoilState<string>(dropdownKey);

  // 얼럿모달
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  // 모달 라우터
  const onClickExitSubmitModal = () => {
    setAlertModal(false);
    router.push("/QuestionAnswer");
  };

  // 에러 모달
  const onClickExitErrorModal = () => {
    setErrorAlertModal(false);
  };

  const CreateNewQusetionBoard = async (data: CreateQuestionBoardInput) => {
    if (data) {
      try {
        await createQuestionBoard({
          variables: {
            createquestionBoardInput: {
              title: data.title,
              contents: data.contents,
              questionCategory: select,
            },
          },
        });
        setModalContents("문의 등록이 완료되었습니다!");
        setAlertModal(true);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        setModalContents(message);
        setErrorAlertModal(true);
      }
    }
  };
  return (
    <QuestionAnswerWriteUI
      register={register}
      handleSubmit={handleSubmit}
      CreateNewQusetionBoard={CreateNewQusetionBoard}
      formState={formState}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      onClickExitSubmitModal={onClickExitSubmitModal}
      onClickExitErrorModal={onClickExitErrorModal}
    />
  );
}
