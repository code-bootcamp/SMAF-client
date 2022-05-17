import QuestionAnswerWriteUI from "./questionAnswerWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_QUESTION_BOARD } from "./questionAnswerWrite.queris";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function QuestionAnswerWrite() {
  const router = useRouter();
  const [createQuestion] = useMutation(CREATE_QUESTION_BOARD);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const createQusetionBoard = async (data: any) => {
    try {
      const result = await createQuestion({
        variables: {
          ...data,
          questionCategory: "문의하기",
          user: "티켓",
        },
      });
      console.log(result);
      router.push("/QuestionAnswer");
    } catch (error) {}
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
