import { useQuery } from "@apollo/client";
import QuestionAnswerListUI from "./QuestionAnswerList.presenter";
import { FETCH_QUESTION_BOARDS, FETCH_QUESTION_BOARDS_COUNT } from "./QuestionAnswerList.querys";

export default function QuestionAnswerList() {
  const { data, refetch } = useQuery(FETCH_QUESTION_BOARDS,{
    variables:{ page: 1 }
  });
  const { data: dataQuestionBoardsCount, refetch: refetchQuestionBoardsCount} = useQuery(FETCH_QUESTION_BOARDS_COUNT)

  const lastPage = Math.ceil(dataQuestionBoardsCount?.fetchQuestionBoardsCount / 5)

  return (
  <QuestionAnswerListUI 
  data={data}
  refetch={refetch}
  lastPage={lastPage}  
  dataQuestionBoardsCount={dataQuestionBoardsCount}
  refetchQuestionBoardsCount={refetchQuestionBoardsCount}
   />);
}
