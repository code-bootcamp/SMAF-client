import { useQuery } from "@apollo/client";
import QuestionAnswerListUI from "./QuestionAnswerList.presenter";
import {
  FETCH_QUESTION_BOARDS,
  FETCH_QUESTION_BOARDS_COUNT,
  FETCH_LOGIN_USER,
} from "./QuestionAnswerList.querys";

export default function QuestionAnswerList() {
  const { data, refetch } = useQuery(FETCH_QUESTION_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataQuestionBoardsCount, refetch: refetchQuestionBoardsCount } =
    useQuery(FETCH_QUESTION_BOARDS_COUNT);
  const { data: myData } = useQuery(FETCH_LOGIN_USER);
  const lastPage = Math.ceil(
    dataQuestionBoardsCount?.fetchQuestionBoardsCount / 5
  );

  return (
    <QuestionAnswerListUI
      data={data}
      refetch={refetch}
      lastPage={lastPage}
      myData={myData}
      dataQuestionBoardsCount={dataQuestionBoardsCount}
      refetchQuestionBoardsCount={refetchQuestionBoardsCount}
    />
  );
}
