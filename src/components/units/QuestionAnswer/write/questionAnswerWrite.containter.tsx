import QuestionAnswerWriteUI from "./questionAnswerWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_QUESTION_BOARD,
  FETCH_LOGIN_USER,
} from "./questionAnswerWrite.queris";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function QuestionAnswerWrite() {
  const router = useRouter();
  const [createQuestionBoard] = useMutation(CREATE_QUESTION_BOARD);
  const { data: userData } = useQuery(FETCH_LOGIN_USER);

  console.log(String(userData?.fetchLoginUser?.userId));
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const CreateNewQusetionBoard = async (data: any) => {
    console.log(data, "data");
    if (data) {
      try {
        const result = await createQuestionBoard({
          variables: {
            createquestionBoardInput: {
              title: data.title,
              contents: data.contents,
              questionCategory: "문의하기",
            },
          },
        });
        console.log(result, "결과");
        router.push("/QuestionAnswer");
      } catch (error) {
        console.log(data, "크리에이트데이타");
        alert("no");
      }
    }
  };
  return (
    <QuestionAnswerWriteUI
      register={register}
      handleSubmit={handleSubmit}
      CreateNewQusetionBoard={CreateNewQusetionBoard}
      formState={formState}
    />
  );
}
