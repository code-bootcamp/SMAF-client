import QuestionAnswerWriteUI from "./questionAnswerWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_QUESTION_BOARD,
  FETCH_LOGIN_USER,
} from "./questionAnswerWrite.queris";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { dropdownKey } from "../../../../commons/store";
import { useState } from "react";

export default function QuestionAnswerWrite() {
  const router = useRouter();
  const [createQuestionBoard] = useMutation(CREATE_QUESTION_BOARD);
  const { data: userData } = useQuery(FETCH_LOGIN_USER);

  console.log(String(userData?.fetchLoginUser?.userId));
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [select, setSelect] = useRecoilState<string>(dropdownKey)

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

  const CreateNewQusetionBoard = async (data: any) => {
    console.log(data, "data");
    if (data) {
      try {
        const result = await createQuestionBoard({
          variables: {
            createquestionBoardInput: {
              title: data.title,
              contents: data.contents,
              questionCategory: select,
            },
          },
        });
        console.log(result, "결과");
        setModalContents("문의 등록이 완료되었습니다!");
        setAlertModal(true);

      } catch (error:any) {
        setModalContents(error.message);
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
