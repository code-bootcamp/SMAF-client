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
  const [createQuestion] = useMutation(CREATE_QUESTION_BOARD);
  const { data: userData } = useQuery(FETCH_LOGIN_USER);

  console.log(userData);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const createQusetionBoard = async (data: any) => {
    try {
      const result = await createQuestion({
        variables: {
          ...data,
          questionCategory: "문의하기",
          user: userData?.fetchLoginUser?.userName,
        },
      });
      console.log(result, "결과");
      console.log(data, "크리에이트데이터");
      router.push("/QuestionAnswer");
    } catch (error) {
      alert("no");
    }
  };
  return (
    <QuestionAnswerWriteUI
      register={register}
      handleSubmit={handleSubmit}
      createQusetionBoard={createQusetionBoard}
      formState={formState}
    />
  );
}
