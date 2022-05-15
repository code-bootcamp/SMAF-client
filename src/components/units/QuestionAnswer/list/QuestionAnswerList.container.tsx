import { useQuery } from "@apollo/client";
import QuestionAnswerListUI from "./QuestionAnswerList.presenter";
import { FETCH_QUESTION_BOARDS } from "./QuestionAnswerList.querys";

export default function QuestionAnswerList() {
  const { data } = useQuery(FETCH_QUESTION_BOARDS);

  return <QuestionAnswerListUI data={data} />;
}
